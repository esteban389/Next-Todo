import LoginCard from "@/app/(user)/login/LoginCard";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your account",
};
const LoginPage = () => {
  return (
    <main className="flex w-full h-full items-center justify-center px-4">
      <LoginCard />
    </main>
  );
};

export default LoginPage;
