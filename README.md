# [Spotify Hub](https://spotify-hub-ten.vercel.app/)

## Description

This is my attempt of creating SpotifyStats app but better. My idea was to not only create an app where you can check your recently listened artsits or specific tracks but also where you can play games like guessing a track name after listening to its first few seconds etc. Unfortunatly I had to abandon the project due to the fact that these types of games are against Spotify API Terms of Service so I couldn't develop the app even more.

## Whats inside?

- Next.js
- React
- Nextauth
- Chart.js

## Usage

If you want to try the app yourself you can check it out under this [link](https://spotify-hub-ten.vercel.app/)

## Instalation

If you want to try running the app localy and tweak it a little bit - just follow these steps:

1. Clone the repository

```
git clone https://github.com/j-lewandowski/spotify-hub
```

2. Install necessary packages by running

```
npm install
```

in your project folder 3. Create a `.env.local` file and fill in the data:

```
SPOTIFY_CLIENT_SECRET="SPOTIFY_CLIENT_SECRET"
SPOTIFY_CLIENT_ID="SPOTIFY_CLIENT_ID"

BASE_URL='http://localhost:3000' # or whatever port you are using

NEXTAUTH_SECRET="NEXTAUTH_SECRET"
SPOTIFY_REFRESH_TOKEN_URL="https://accounts.spotify.com/api/token"
```

To get Spotify Client ID and secret you will need to go to [Spotify Developer Website](https://developer.spotify.com/dashboard), create your project and copy the data from the app dashboard.

## License

This project is licensed under the MIT License.
