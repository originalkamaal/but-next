import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from '../../../lib/mongodb';
import User from '../../../model/schema';
import { compare } from 'bcryptjs';


export default NextAuth({
  //adapter: MongoDBAdapter(clientPromise),
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {

      },
      async authorize(credentials, req) {
        connect();

        const result = await User.findOne({ email: credentials.email });
        console.log(result,"nextauth login");
        if (!result) {
          throw new Error('No user found with the email');
        }
        //Check hased password with DB password
        const checkPassword = await compare(credentials.passowrd, result.passowrd);
        //Incorrect password - send response
        if (!checkPassword) {
          throw new Error('Password doesnt match');
        }
        return { email: result.email};

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