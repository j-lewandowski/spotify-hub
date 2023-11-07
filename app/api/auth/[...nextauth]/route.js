import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

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
      }
      return token;
    },

    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },
};

//@ts-ignore directive
const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };
