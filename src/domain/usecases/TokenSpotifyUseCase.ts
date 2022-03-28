import { constants } from "../../main/config/constants";
import axios from "axios";
import oauth from "axios-oauth-client";
import { Request, Response } from "express";

class TokenSpotifyUseCase {
  async accessToken(code: string) {
    const { redirect_uri, client_id, client_secret } = constants;
    await axios
      .request({
        url: "/api/token",
        method: "post",
        baseURL: "https://accounts.spotify.com",
        data: {
          grant_type: "authorization_code",
          code,
          redirect_uri,
        },
        headers: {
          Authorization:
            "Basic " +
            new Buffer(client_id + ":" + client_secret).toString("base64"),
        },
      })
      .then((respose) => {
        console.log(respose);
      });
  }
}

export { TokenSpotifyUseCase };
