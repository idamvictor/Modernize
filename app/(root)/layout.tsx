
import { AppSidebar } from "@/components/app-sidebar";
import DropdownMenuBar from "@/components/DropdownMenu";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { BellDot, CircleUser } from "lucide-react";
import Link from "next/link";

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
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 lg:hidden md:hidden" />
          <BellDot className="h-5 w-5 " />
          <Link href="/authentication/login">
            <Button>Login</Button>
          </Link>
          <DropdownMenuBar icon={CircleUser} />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
