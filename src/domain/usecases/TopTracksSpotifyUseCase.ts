import fetch from 'cross-fetch';

 //const recently = 'https://api.spotify.com/v1/me/player/recently-played?limit=10';
 const tracks = 'https://api.spotify.com/v1/me/top/tracks';
 
class TopTracksSpotifyUseCase {
  async topTracks(token: string): Promise<void> {
    try {
      const result = await fetch(tracks, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      }
    })
   
    return await result.json();
    
    } catch (error) {
      return console.log(error);
    }
    
  }
};

export { TopTracksSpotifyUseCase };