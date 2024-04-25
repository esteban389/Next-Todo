import Sidebar from "@/components/layout/sidebar";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="fixed top-2 right-2">
        <ModeToggle />
      </div>
      {children}
    </>
  );
}
