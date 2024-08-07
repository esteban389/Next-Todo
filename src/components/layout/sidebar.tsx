"use client";
import React, { useState, useEffect } from "react";
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
import { motion } from "framer-motion";
const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const logoutVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const profileVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Sidebar() {
  const [isOpen, setSidebar] = useState(false);
  const path = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const handleToggle = () => {
    setSidebar(!isOpen);
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <motion.nav
      className="transition-all duration-300 sticky hidden h-screen border-r p-4 md:flex md:flex-col md:justify-between gap-4"
      initial={{ width: "fit-content" }}
      animate={{ width: isOpen ? "auto" : "fit-content" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "absolute -right-4 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          !isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      >
        <Button className="p-2 rounded-full" variant={"ghost"}>
          <ArrowLeft />
        </Button>
      </motion.div>
      <motion.div
        role="avatar-container"
        className="w-full flex flex-col gap-1 justify-center items-center"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={profileVariants}
        transition={{ duration: 0.5 }}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-sm">@shadcn</p>
      </motion.div>
      <Separator />
      <TooltipProvider delayDuration={0}>
        <motion.ul
          className="h-full"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={listVariants}
        >
          <motion.li variants={itemVariants}>
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
                  <motion.span
                    className="text-start"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      width: isOpen ? "120px" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Profile
                  </motion.span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className={`${isOpen && "hidden"}`}>
                <p>Profile</p>
              </TooltipContent>
            </Tooltip>
          </motion.li>
          <motion.li variants={itemVariants}>
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
                  <motion.span
                    className="text-start"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      width: isOpen ? "120px" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Tasks
                  </motion.span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className={`${isOpen && "hidden"}`}>
                <p>Tasks</p>
              </TooltipContent>
            </Tooltip>
          </motion.li>
        </motion.ul>
      </TooltipProvider>
      <Separator />
      <motion.footer
        className="flex justify-center items-center"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={logoutVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button
          className={cn(
            "text-base duration-200 group relative flex h-12 justify-start gap-2"
          )}
        >
          <LogOut />
          <motion.span
            className="text-start"
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              width: isOpen ? "60px" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            Logout
          </motion.span>
        </Button>
      </motion.footer>
    </motion.nav>
  );
}
