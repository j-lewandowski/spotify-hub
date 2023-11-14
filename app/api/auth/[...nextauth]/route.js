import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

async function refreshAccessToken(token) {
  try {
    const basicAuth = Buffer.from(
      `${prcoess.env.SPOTIFY_CLIENT_ID}:${prcoess.env.SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");
    const { data } = await fetch(SPOTIFY_REFRESH_TOKEN_URL, {
      method: "POST",
      body: {
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      },
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return {
      ...token,
      accessToken: data.access_token,
      accessTokenExpires: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const OPTIONS = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID || "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-currently-playing,user-read-recently-played,user-top-read,user-read-email",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at * 1000;
      }
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }
      const newToken = await refreshAccessToken(token);
      return newToken;
    },

    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      session.error = token.error;

      return session;
    },
  },
};

//@ts-ignore directive
const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };
