using Facebook;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class AuthFB : System.Web.UI.Page
{
    //public string dominioDeOrigem;
    protected void Page_Load(object sender, EventArgs e)
    {

        userFacebook userFacebook = new userFacebook();
        var fb = new FacebookClient();
        FacebookOAuthResult oauthResult;
        //Request.Url
        var url = HttpContext.Current.Request.Url;

        #region Variáveis dos Dominios - Frontend
        //LOCALHOST
        //var redirectHome = "http://localhost:3000/#/home";
        //var redirectCadastro = "http://localhost:3000/#/cadastro";

        //VLD
        var redirectHome = "https://mercedesclube-vld.azurewebsites.net/#/home";
        var redirectCadastro = "https://mercedesclube-vld.azurewebsites.net/#/cadastro";

        //HML
        //var redirectHome = "https://mercedesclube-hml.azurewebsites.net/#/home";
        //var redirectCadastro = "https://mercedesclube-hml.azurewebsites.net/#/cadastro"; 
        #endregion

        fb.TryParseOAuthCallbackUrl(url, out oauthResult);

        if (oauthResult.IsSuccess)
        {
            try
            {
                dynamic parameters = new ExpandoObject();

                parameters.client_id = "273264676457487";
                parameters.redirect_uri = GetUrlCallbackLogin();
                parameters.client_secret = "2fdbc689acf86dfd668c5ef625d50eff";
                parameters.code = oauthResult.Code;

                dynamic result = fb.Get("/oauth/access_token", parameters);
                var accessToken = result.access_token;

                var targetUserUri = new Uri("https://graph.facebook.com/me?fields=name,birthday,email,gender,locale,link&access_token=" + accessToken);
                
                var user = (HttpWebRequest)WebRequest.Create(targetUserUri);
                var body = user.GetResponse().GetResponseStream();
                var userInfo = new StreamReader(user.GetResponse().GetResponseStream());
                var jsonResponse = userInfo.ReadToEnd();

                userFacebook = JsonConvert.DeserializeObject<userFacebook>(jsonResponse);



                WebRequest request = WebRequest.Create(GetUrlBackEnd() + "AuthFB/?facebookId=" + userFacebook.id);
                request.Credentials = CredentialCache.DefaultCredentials;
                WebResponse response = request.GetResponse();
                Stream dataStream = response.GetResponseStream();
                StreamReader reader = new StreamReader(dataStream);
                String responseFromServer = reader.ReadToEnd();

                usuarioLogado userLogado = JsonConvert.DeserializeObject<usuarioLogado>(responseFromServer);



                StringBuilder data = new StringBuilder();
                data.Append("grant_type=password");
                data.Append("&username=" + userLogado.documentoParticipante);
                data.Append("&password=r3*Fu7@Iu7@Z");

                // Create a byte array of the data to be sent
                byte[] byteArray = Encoding.UTF8.GetBytes(data.ToString());

                // Setup the Request
                HttpWebRequest request2 = (HttpWebRequest)WebRequest.Create(GetUrlBackEnd() + "Token");
                request2.Method = "POST";
                request2.ContentType = "application/json";
                request2.ContentLength = byteArray.Length;

                // Write data
                Stream postStream = request2.GetRequestStream();
                postStream.Write(byteArray, 0, byteArray.Length);
                postStream.Close();

                // Send Request & Get Response
                HttpWebResponse response2 = (HttpWebResponse)request2.GetResponse();
                string json = "";
                using (StreamReader reader2 = new StreamReader(response2.GetResponseStream()))
                {
                    // Get the Response Stream
                    json = reader2.ReadLine();
                }
                Token tk = JsonConvert.DeserializeObject<Token>(json);

                List<string[]> Properties = PropertiesFromType(tk);
                foreach (string[] l in Properties)
                {
                    HttpCookie a = new HttpCookie(l[0]);
                    a.Value = l[1];
                    a.Expires = DateTime.Now.AddMinutes(1);
                    Response.Cookies.Add(a);
                    
                }
                Response.Redirect(redirectHome);
            }

            catch (Exception ex)
            {
                List<string[]> Properties = PropertiesFromType(userFacebook);
                foreach (string[] l in Properties)
                {
                    HttpCookie a = new HttpCookie(l[0]);
                    a.Value = l[1];
                    a.Expires = DateTime.Now.AddMinutes(2);
                    Response.Cookies.Add(a);
                }

                ScriptManager.RegisterStartupScript(this, Page.GetType(), "", "console.log('" + ex.Message.ToString() + "'); window.location = '" + redirectCadastro + "' ", true);
                
            }
        }

        
    }

    public static List<string[]> PropertiesFromType(object atype)
    {
        if (atype == null) return new List<string[]>() { };
        Type t = atype.GetType();
        PropertyInfo[] props = t.GetProperties();
        List<string[]> propNames = new List<string[]>();
        foreach (PropertyInfo prp in props)
        {
            string[] a = new string[2];
            object value = prp.GetValue(atype);
            a[0] = prp.Name;
            a[1] = value.ToString();
            propNames.Add(a);
        }
        return propNames;
    }


    public string GetUrl()
    {
        var url = HttpContext.Current.Request.Url.Host.ToString();
        var porta = HttpContext.Current.Request.Url.Port;
        var protocolo = HttpContext.Current.Request.IsSecureConnection ? "https" : "http";

        if (url == "localhost")
            url = url + ":" + porta;

        return string.Format("{0}://{1}", protocolo, url);
    }

    public string GetUrlCallbackLogin()
    {
        return string.Format("{0}/{1}/", GetUrl(), @"AuthFB.aspx");
    }

    public string GetUrlCallbackfacebook()
    {
        return string.Format("{0}/{1}/", GetUrl(), @"#/home");
    }

    public string GetUrlFront()
    {
        var url = HttpContext.Current.Request.Url.Host.ToString();
        var porta = HttpContext.Current.Request.Url.Port;
        var protocolo = HttpContext.Current.Request.IsSecureConnection ? "https" : "http";

        if (url == "localhost")
            url = url + ":" + "3000";

        return string.Format("{0}://{1}", protocolo, url);
    }

    public string GetUrlCallbackLoginFront()
    {
        return string.Format("{0}/{1}", GetUrlFront(), @"#/facebook");
    }


    public class userFacebook
    {
        public string name { get; set; }
        public string email { get; set; }
        public string gender { get; set; }
        public string locale { get; set; }
        public string link { get; set; }
        public string id { get; set; }
    }

    public class usuarioLogado
    {
        public string documentoParticipante { get; set; }
    }

    public class Token
    {
        public string access_token { get; set; }
        public string token_type { get; set; }
        public int expires_in { get; set; }
        public string userName { get; set; }
    }

    public string GetUrlBackEnd()
    {
        var url = System.Configuration.ConfigurationManager.AppSettings["urlAPI"].ToString();
        
        return  url;
    }

}