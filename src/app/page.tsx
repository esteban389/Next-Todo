import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
//Zu2ki2b2TW2blV0l
export default function Home(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-1 flex-grow-0 py-8 px-12 items-center justify-center rounded-lg border border-solid shadow-xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight">TASK MANAGER</h1>
            <p className="text-sm text-muted-foreground">
              Take control of your tasks with ease. Log in to streamline your
              to-do list.
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <Button className="mt-4" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="mt-4" asChild variant={"link"}>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
