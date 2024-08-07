"use client";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/layout/sidebar";
import { usePathname } from "next/navigation";

const pageVariants = {
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -35 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-stretch h-full w-full">
      <Sidebar />
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial="initial"
            animate="animate"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
