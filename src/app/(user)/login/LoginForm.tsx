"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
async function login(prevState: any, formData: any) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...prevState, ...formData });
    }, 3000);
  });
}
export default function LoginForm() {
  const [state, formAction] = useFormState(login, { email: "", password: "" });
  return (
    <form className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link href="#" className="ml-auto inline-block text-sm underline">
            Forgot your password?
          </Link>
        </div>
        <Input id="password" type="password" />
      </div>
      <SubmitButton action={formAction}>Login</SubmitButton>
    </form>
  );
}

function SubmitButton({ action, children }: { action: any, children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" type="submit" formAction={action}>
      {children}
    </Button>
  );
}
