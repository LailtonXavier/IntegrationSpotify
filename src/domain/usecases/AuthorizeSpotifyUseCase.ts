import { constants } from "../../main/config/constants";
import querystring from "query-string";
import crypto from "crypto";

class AuthorizeSpotifyUseCase {
  private state = crypto.randomBytes(16).toString("hex");

  authorize(): string {
    const { client_id, redirect_uri, scope } = constants;
    
    const urlAuthorize =
      "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id,
        scope,
        redirect_uri,
        state: this.state,
      });

    return urlAuthorize;
  }
}

export { AuthorizeSpotifyUseCase };
