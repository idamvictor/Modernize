import * as React from "react";
// import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import AccountSignUp from "./AccountSignUp";
import Image from "next/image";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/",
        },
      ],
    },
    {
      title: "Utilities",
      url: "#",
      items: [
        {
          title: "Typography",
          url: "#",
        },
        {
          title: "Shadow",
          url: "#",
          isActive: true,
        },
      ],
    },
    {
      title: "Auth",
      url: "#",
      items: [
        {
          title: "Login",
          url: "#",
        },
        {
          title: "Register",
          url: "#",
        },
      ],
    },
    {
      title: "Extra",
      url: "#",
      items: [
        {
          title: "icons",
          url: "#",
        },
        {
          title: "Sample Page",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  className="object-contain aspect-[6.71]"
                  width={174}
                  height={26}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <div className="text-xs font-bold leading-7 text-gray-700 uppercase">
                    {item.title}
                  </div>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url} className="font-jakarta text-sm font-normal leading-[21.34px]">{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <AccountSignUp />
      </SidebarContent>
    </Sidebar>
  );
}
