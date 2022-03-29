import { Request, Response } from "express";
import { AuthorizeSpotifyUseCase } from "../../domain/usecases/AuthorizeSpotifyUseCase";
import { IController } from "../protocols";

class AuthorizeSpotifyController implements IController {
  handle(_req: Request, res: Response) {
    const authorizeSpotifyUseCase = new AuthorizeSpotifyUseCase();

    const urlAuthorize = authorizeSpotifyUseCase.authorize();

    res.redirect(urlAuthorize);
  }
}

export { AuthorizeSpotifyController };
