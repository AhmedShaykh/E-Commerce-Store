import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter Your Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Your Password",
                },
            },
            async authorize(credentials) {
                const user = { id: "1001", email: "ahmed", password: "ahmed" };
                if (
                    credentials?.email === user.email &&
                    credentials?.password === user.password
                ) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ]
};