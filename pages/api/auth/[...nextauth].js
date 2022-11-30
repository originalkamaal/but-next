import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {

      },
      async authorize(credentials, req) {
        console.log(credentials);
        const { email, password } = credentials
        if (email == "originalkamaal@gmail.com" || password == "kamal@2014") {
          return ({ email, id: "12134234" });
        }
        else {
          throw new Error("Invalid Credentials")
        }


      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  jwt: {
    encode: true
  }

})