import SignUpForm from "@/components/SignUpForm";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign up",
  description: "Create an account to access the app",
};
const SignUpPage = () => {
  return (
    <main className="flex w-full h-full items-center justify-center px-4">
      <SignUpForm />
    </main>
  );
};

export default SignUpPage;
