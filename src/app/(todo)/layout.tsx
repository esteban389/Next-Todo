import Sidebar from "@/components/layout/sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="flex flex-row items-stretch h-full w-full">
      <Sidebar />
      <div className="w-full">{children}</div>
        <Toaster />
    </div>
  );
}
