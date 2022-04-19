import { constants } from "../../main/config/constants";
import fetch from "cross-fetch";

export type ResponseAccesToken = {
  access_token: string;
  refresh_token: string;
};

class TokenSpotifyUseCase {
  async accessToken(code: string): Promise<ResponseAccesToken> {
    const { client_id, client_secret, redirect_uri } = constants;
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + Buffer.from(client_id + ":" + client_secret)
        .toString('base64'),
      },
      body: `code=${code}&redirect_uri=${redirect_uri}&grant_type=authorization_code`,
    });

    const { access_token, refresh_token } = await result.json();

    return { access_token, refresh_token };
  }
}

export { TokenSpotifyUseCase };
