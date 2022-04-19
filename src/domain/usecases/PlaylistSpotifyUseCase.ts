import fetch from 'cross-fetch';

class PlaylistSpotifyUseCase {

  async myPlaylist(token: string): Promise<void> {
    const result = await fetch('https://api.spotify.com/v1/me/playlists', {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      }
    });

    return await result.json();
  }
}

export { PlaylistSpotifyUseCase };