import LoginCard from "@/app/(user)/login/components/LoginCard";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your account",
};
const LoginPage = ():React.ReactElement => {
  return (
    <main className="flex w-full h-full items-center justify-center px-4">
      <LoginCard />
    </main>
  );
};

export default LoginPage;
