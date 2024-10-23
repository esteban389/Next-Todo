import LoginCard from "@/app/(user)/login/components/LoginCard";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your account",
};
const LoginPage = (): React.ReactElement => {
  return (
    <main
      className="flex w-full h-full items-center justify-center px-4"
      style={{
        background: "radial-gradient(#e0e0e0 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <LoginCard />
    </main>
  );
};

export default LoginPage;
