using Facebook;
using System;
using System.Dynamic;
using System.Web;
using System.Web.UI;

public partial class _Default : System.Web.UI.Page
{
    private static Uri url;
    protected void Page_Load(object sender, EventArgs e)
    {
        
        dynamic parameters = new ExpandoObject();

        parameters.client_id = "273264676457487";
        parameters.redirect_uri = GetUrlCallbackLogin();
        parameters.response_type = "code";//token,code;
        parameters.display = "page";//popup, page

        const string extendedPermissions = "public_profile,email,user_about_me,user_birthday";
        parameters.scope = extendedPermissions;

        var fb = new FacebookClient();
        url = fb.GetLoginUrl(parameters);

        ScriptManager.RegisterStartupScript(this, Page.GetType(), "", "window.location='" + url + "';", true);
    }

    public string GetUrlCallbackLogin()
    {
        return string.Format("{0}/{1}/", GetUrl(), @"AuthFB.aspx");
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
    
}