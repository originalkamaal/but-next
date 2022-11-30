import NextAuth from 'next-auth'
import  CredentialsProvider  from 'next-auth/providers/credentials'

export default NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      type: "Credentials",
      credentials: {
        
      },
      async authorize(credentials, req) {
        const { email, password } = credentials
        if (email == "originalkamaal@gmail.com" && password == "kamal@2014") {
          return ({email, id:"12134234"});
        }
        else return null


      }
    })
  ],
  pages:{
    signIn :'/login'
  }
})