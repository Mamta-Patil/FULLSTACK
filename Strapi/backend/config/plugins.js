// // module.exports = () => ({});
// module.exports = {
//     'users-permissions': {
//       config: {
//         providers: [
//           {
//             uid: 'github',
//             displayName: 'GitHub',
//             icon: 'github',
//             createStrategy: require('@strapi/plugin-users-permissions/server/services/providers/github'),
//             auth: {
//               scope: ['user', 'email'],
//             },
//           },
//         ],
//       },
//     },
//   };
// const { env } = require('@strapi/utils');

// module.exports = {
//   'users-permissions': {
//     config: {
//       providers: {
//         github: {
//           uid: 'github',
//           displayName: 'GitHub',
//           icon: 'github',
//           createUserIfNotExists: true,
//           redirectUri: env('GITHUB_CALLBACK_URL'), // e.g., http://localhost:1337/api/auth/github/callback
//           auth: {
//             scope: ['user:email'],
//           },
//           clientId: env('GITHUB_CLIENT_ID'),
//           clientSecret: env('GITHUB_CLIENT_SECRET')
//         },
//       },
//     },
//   },
// };
module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        providers: {
          google: {
            clientId: env('GOOGLE_CLIENT_ID'),
            clientSecret: env('GOOGLE_CLIENT_SECRET'),
            redirectUri: 'http://localhost:3000/connect/google/callback',
          },
          github: {
            clientId: env('GITHUB_CLIENT_ID'),
            clientSecret: env('GITHUB_CLIENT_SECRET'),
            redirectUri: 'http://localhost:3000/connect/github/callback',
          },
        },
      },
    },
  });