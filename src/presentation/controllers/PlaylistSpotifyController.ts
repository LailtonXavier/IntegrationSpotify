import { Request, Response } from 'express';
import { PlaylistSpotifyUseCase } from '../../domain/usecases/PlaylistSpotifyUseCase';
import { TokenSpotifyUseCase } from '../../domain/usecases/TokenSpotifyUseCase';
import { IController } from '../protocols';

class PlaylistSpotifyController implements IController{
  async handle(req: Request, res: Response) {
    const { authorization } = req.headers;

    const playlistSpotifyUseCase = new PlaylistSpotifyUseCase();
    
    const result = await playlistSpotifyUseCase.myPlaylist(authorization);

    res.json(result);

  }
}

export { PlaylistSpotifyController };
