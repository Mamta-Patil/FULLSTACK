import { BetterAuthConfig } from "@bettercollected/auth-next";

export const authConfig = {
  providers: [
    {
      id: "github",
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  ],
  pages: {
    signIn: "/signin", // Ensure this route exists
  },
};

export default authConfig;
