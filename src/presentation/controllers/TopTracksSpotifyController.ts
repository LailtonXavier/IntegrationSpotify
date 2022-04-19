import { Request, Response } from 'express';
import { TopTracksSpotifyUseCase } from '../../domain/usecases/TopTracksSpotifyUseCase';
import { IController } from '../protocols';

class TopTracksSpotifyController implements IController{
  async handle(req: Request, res: Response) {
    const { authorization } = req.headers;

    try {
        
      const topTracksSpotifyUseCase = new TopTracksSpotifyUseCase();

      const result = await topTracksSpotifyUseCase.topTracks(authorization);

      res.json(result);
    } catch (error) {
      console.log(error);
      
    }


  }

}

export { TopTracksSpotifyController };