"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
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

const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: "/svg/dashboard.svg",
        },
      ],
    },
    {
      title: "Utilities",
      url: "#",
      items: [
        {
          title: "Typography",
          url: "/typography",
          icon: "/svg/typography.svg",
        },
        {
          title: "Shadow",
          url: "/shadow",
          icon: "/svg/shadow.svg",
        },
      ],
    },
    {
      title: "Auth",
      url: "#",
      items: [
        {
          title: "Login",
          url: "/authentication/login",
          icon: "/svg/login.svg",
        },
        {
          title: "Register",
          url: "/authentication/register",
          icon: "/svg/register.svg",
        },
      ],
    },
    {
      title: "Extra",
      url: "#",
      items: [
        {
          title: "icons",
          url: "/icons",
          icon: "/svg/icons.svg",
        },
        {
          title: "Sample Page",
          url: "/samplePage",
          icon: "/svg/samplePage.svg",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Get current pathname for active state management
  const pathname = usePathname();

  // Check if the current path matches the item's URL
  const isActiveLink = (itemUrl: string) => {
    // Handle root path specifically for dashboard
    if (itemUrl === "/" && pathname === "/") {
      return true;
    }
    // For other paths, check if the current path starts with the item URL
    // This handles nested routes as well
    return pathname.startsWith(itemUrl) && itemUrl !== "/";
  };

  return (
    <Sidebar variant="sidebar" {...props}  >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  className="object-contain aspect-[6.71] "
                  width={200}
                  height={26}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="ml-[-12px] mt-[24px]">
        <SidebarGroup>
          <SidebarMenu className="gap-2 px-4">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title} className=" mb-5">
                <div className="font-semibold leading-7 text-[#2A3547] uppercase !text-sm mb-2 ml-4">
                  {item.title}
                </div>

                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5 ">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActiveLink(subItem.url)}
                          className="!text-lg"
                        >
                          <Link
                            href={subItem.url}
                            className="font-jakarta  font-normal leading-[21.34px] flex items-center gap-2 h-[50px] pl-4"
                          >
                            <Image
                              src={subItem.icon}
                              alt={`${subItem.title} icon`}
                              width={20}
                              height={20}
                            />
                            {subItem.title}
                          </Link>
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

export default AppSidebar;
