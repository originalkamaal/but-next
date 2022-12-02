import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import clientPromise from "../../../lib/mongodb";
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
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
          return ({ email, id: "12134234", role: "admin" });
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
  callbacks: {
    async jwt(params) {
      console.log(params)
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      return params.token;

    },
  },

})