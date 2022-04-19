import { Request, Response } from "express";
import { TokenSpotifyUseCase } from "../../domain/usecases/TokenSpotifyUseCase";
import { IController } from "../protocols";

class CallbackSpotifyController implements IController {
  async handle(req: Request, res: Response) {
    const { code } = req.query;

    const tokenSpotifyUseCase = new TokenSpotifyUseCase();

    const { access_token, refresh_token } =
      await tokenSpotifyUseCase.accessToken(String(code));

    res.json({access_token, refresh_token});
  }
}

export { CallbackSpotifyController };
