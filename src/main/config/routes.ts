import axios from "axios";
import { Router } from "express";
import { AuthorizeSpotifyController } from "../../presentation/controllers/AuthorizeSpotifyController";
import { CallbackSpotifyController } from "../../presentation/controllers/CallbackSpotifyController";
import { PlaylistSpotifyController } from '../../presentation/controllers/PlaylistSpotifyController';
import { TopTracksSpotifyController } from '../../presentation/controllers/TopTracksSpotifyController';

const routes = Router();

routes.get("/authorize", new AuthorizeSpotifyController().handle);
routes.get("/callback", new CallbackSpotifyController().handle);
routes.get('/playlist', new PlaylistSpotifyController().handle);
routes.get('/tracks', new TopTracksSpotifyController().handle);

export { routes };
