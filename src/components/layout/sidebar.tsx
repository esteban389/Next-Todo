"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, ListTodo, LogOut, User } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface SidebarProps {
  className?: string;
}
const hiddenClasses =
  "w-0 text-background opacity-0 transition-all duration-300 ";
export default function Sidebar({ className }: SidebarProps) {
  const [isOpen, setSidebar] = useState(false);
  const toggle = () => setSidebar(!isOpen);
  const [status, setStatus] = useState(false);
  const path = usePathname();
  console.log(path);
  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };
  return (
    <nav
      className={cn(
        `transition-all duration-300 fixed hidden h-screen border-r w-fit p-4 md:flex md:flex-col md:justify-between gap-4`,
        status && "duration-500",
        className
      )}
    >
      <ArrowLeft
        className={cn(
          "absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          !isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div
        role="avatar-container"
        className="w-full flex justify-center items-center"
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <Separator />
      <TooltipProvider delayDuration={0}>
        <ul className="h-full">
          <li>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={"/profile"}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "gap-2 relative flex h-12 justify-start",
                    path === "/profile" && "bg-muted font-bold hover:bg-muted"
                  )}
                >
                  <User />
                  <span
                    className={cn(
                      "text-start",
                      !isOpen && hiddenClasses,
                      isOpen &&
                        "inline-block left-12 text-base duration-200 w-[120px]"
                    )}
                  >
                    Profile
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className={`${isOpen && "hidden"}`}>
                <p>Profile</p>
              </TooltipContent>
            </Tooltip>
          </li>
          <li>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={"/tasks"}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "gap-2 relative flex h-12 justify-start",
                    path === "/tasks" && "bg-muted font-bold hover:bg-muted"
                  )}
                >
                  <ListTodo />
                  <span
                    className={cn(
                      "text-start",
                      !isOpen && hiddenClasses,
                      isOpen &&
                        "inline-block left-12 text-base duration-200 w-[120px]"
                    )}
                  >
                    Tasks
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className={`${isOpen && "hidden"}`}>
                <p>Tasks</p>
              </TooltipContent>
            </Tooltip>
          </li>
        </ul>
      </TooltipProvider>
      <Separator />
      <footer className="flex justify-center items-center">
        <Button
          className={cn(
            "text-base duration-200 group relative flex h-12 justify-start gap-2"
          )}
        >
          <LogOut />
          <span
            className={cn(
              "text-start",
              !isOpen && hiddenClasses,
              isOpen && "inline-block left-12 text-base duration-200 w-[120px] "
            )}
          >
            Logout
          </span>
        </Button>
      </footer>
    </nav>
  );
}
