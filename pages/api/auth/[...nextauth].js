import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.GitHub({
      clientId: "Iv1.4b3b08e8ff2abc74",
      clientSecret: "d83c0de0ff4d1c26c7837cb10dde614a4b2326de"
    }),

  ],

  database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)