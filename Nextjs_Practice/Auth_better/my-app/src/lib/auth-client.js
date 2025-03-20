import {
    createAuthClient
} from "better-auth/react";


export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL,

})
// export const signIn = {
//     social: async ({ provider, callbackURL }) => {
//       return await fetch(`/api/auth/signin/${provider}`, {
//         method: "POST",
//         body: JSON.stringify({ callbackURL }),
//       });
//     },
//   };
  


export const {
    signIn,
    signOut,
    signUp,
    useSession
} = authClient;


// import { signIn as nextAuthSignIn } from "next-auth/react";

// export const signIn = nextAuthSignIn;
