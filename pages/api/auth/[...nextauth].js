import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import dbConnect from "../../../lib/connectDB";
import User from "../../../models/User";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Email & Password
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
      },
      async authorize(credentials) {
        await dbConnect();

        // Find user with the email
        const user = await User.findOne({
          email: credentials?.email,
        });

        // Email Not found
        if (!user) {
          throw new Error("Email is not registered");
        }

        // Check hased password with DB hashed password
        const isPasswordCorrect = await compare(
          credentials.password,
          user.password
        );

        // Incorrect password
        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log(baseUrl, url)
      return baseUrl
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        // console.log(user)
        token['role'] = user.role ? user.role : 'user';
        if (!user.validEmail) {
          token['emailToken'] = user.emailToken;

        }
      }
      return token;
    },
    async session({ session, user, token }) {
      if (token) {
        session.user['role'] = token.role;
        if (token.emailToken) {

          session.user['emailToken'] = token.emailToken;
        }
      }
      return session
    }
  }
});