import { Request, Response } from "express";
import { TokenSpotifyUseCase } from "../../domain/usecases/TokenSpotifyUseCase";
import { IController } from "../protocols";

class CallbackSpotifyController implements IController {
  async handle(req: Request, res: Response) {
    console.log(req)
    const { code } = req.query;

    const tokenSpotifyUseCase = new TokenSpotifyUseCase();

    await tokenSpotifyUseCase.accessToken(String(code));

    res.send("Callback");
  }
}

export { CallbackSpotifyController };
