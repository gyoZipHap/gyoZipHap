import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

const kakaoCustomProvider = KakaoProvider({
  clientId: process.env.KAKAO_CLIENT_ID!,
  clientSecret: process.env.KAKAO_CLIENT_SECRET!,
});

export const authOptions = {
  providers: [kakaoCustomProvider],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
