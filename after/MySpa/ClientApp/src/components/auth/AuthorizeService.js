import { UserManager } from "oidc-client";

export class AuthorizeService {
  getUserManager() {
    if (!this._userManager) {
      console.log("Loading UserManager...");
      const config = {
        authority: "http://localhost:5000",
        client_id: "spa",
        redirect_uri: "https://localhost:44315/sso-callback",
        response_type: "code",
        scope: "openid profile api1",
        post_logout_redirect_uri: "https://localhost:44315/logged-out",
      };
      this._userManager = new UserManager(config);
    }

    return this._userManager;
  }

  async getAccessToken() {
    const mgr = this.getUserManager();
    const user = await mgr.getUser()
    return user && user.access_token;
  }
}

const authService = new AuthorizeService();
export default authService;
