import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import connect from '@/utils/db'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        // connect to DB
        await connect()

        try {
          // find existing user in DB
          const user = await User.findOne({ email: credentials.email })

          //check if user exist
          if (user) {
            //compare entered password with found user's password
            const isPasswordCorrect = bcrypt.compare(
              credentials.password,
              user.password
            )
            //chceck if password is correct
            if (isPasswordCorrect) {
              return user
            } else {
              throw new Error('Wrong credentials')
            }
          } else {
            throw new Error('User does not exist')
          }
        } catch (error) {
          throw new Error(error)
        }
      },
    }),
  ],
  pages: {
    error: '/dashboard/login',
  },
})

export { handler as GET, handler as POST }
