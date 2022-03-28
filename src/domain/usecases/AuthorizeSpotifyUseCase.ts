import { constants } from "../../main/config/constants";
import querystring from "query-string";
import crypto from "crypto";

const state = crypto.randomBytes(16).toString("hex");
const scope = ["user-read-private user-read-email"];

class AuthorizeSpotifyUseCase {
  authorize(): string {
    const { client_id, redirect_uri } = constants;

    console.log(redirect_uri)

    const urlAuthorize =
      "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id,
        scope: scope,
        redirect_uri,
        state: state,
      });

    return urlAuthorize;
  }
}

export { AuthorizeSpotifyUseCase };
