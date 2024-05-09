import Sidebar from "@/components/layout/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <div className="flex flex-row items-stretch h-full w-full">
      <Sidebar />

      {children}
    </div>
  );
}
