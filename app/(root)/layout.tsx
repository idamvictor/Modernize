import { AppSidebar } from "@/components/app-sidebar";
import HeaderBar from "@/components/HeaderBar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar  />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 lg:hidden md:hidden" />
          <HeaderBar />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
