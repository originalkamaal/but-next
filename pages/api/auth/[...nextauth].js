import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import clientPromise from "../../../lib/mongodb";

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
  jwt: {
    encode: true
  },
  callbacks: {
    jwt(params) {
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      return params.token;

    },
    async redirect({ url, baseUrl }) {
      console.log(url, baseUrl);
      return baseUrl
    },
  },
  adapter: MongoDBAdapter(clientPromise)

})