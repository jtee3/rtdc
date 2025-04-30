import { defineAuth, secret } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */

const APP_URL = "https://main.d1txnfa4pg8dnc.amplifyapp.com/";

export const auth = defineAuth({
  // ─── email sign-in + oauth ───
  loginWith: {
    email: true,

    externalProviders: {
      // ── Google  ──
      google: {
        clientId:     secret("GOOGLE_CLIENT_ID"),
        clientSecret: secret("GOOGLE_CLIENT_SECRET"),
        scopes:       ["openid", "email", "profile"],
      },

      // ── GitHub ──
      oidc: [
        {
          name:         "GitHub",
          clientId:     secret("GITHUB_CLIENT_ID"),
          clientSecret: secret("GITHUB_CLIENT_SECRET"),
          issuerUrl:    "https://github.com/login/oauth",
          scopes:       ["openid","read:user", "user:email",],
        },
      ],

      // ── Your app’s callback & logout URLs ──
      callbackUrls: [ 
        "http://localhost:3000/",
        APP_URL
      ],
      logoutUrls:   [
        "http://localhost:3000/",
         APP_URL ],
    },
  },

  // ─── display-only “handle” field ───
  userAttributes: {
    preferredUsername: {
      mutable:  true,
      required: false,
    },
  },
});