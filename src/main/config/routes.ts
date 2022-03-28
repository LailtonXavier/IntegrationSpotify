import { Router } from "express";
import { AuthorizeSpotifyController } from "../../presentation/controllers/AuthorizeSpotifyController";
import { CallbackSpotifyController } from "../../presentation/controllers/CallbackSpotifyController";

const routes = Router();

routes.get('/authorize', new AuthorizeSpotifyController().handle);
routes.get('/callback', new CallbackSpotifyController().handle);

export { routes };
