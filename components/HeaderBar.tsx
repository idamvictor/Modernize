"use client";
import React from "react";
import { BellDot, CircleUser } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DropdownMenuBar from "@/components/DropdownMenu";
import { useAuth } from "@/context/TokenContext";

function HeaderBar() {
  const { accessToken, setAccessToken } = useAuth();

  const handleLogOut = () => {
    setAccessToken(null);
    alert("Logged out successfully");
  };

  return (
    <div className="w-full flex items-center justify-between px-2">
      <BellDot className="h-5 w-5 " />

      <div className="flex items-center gap-2 ">
        {!accessToken && (
          <Link href="/authentication/login">
            <Button>Login</Button>
          </Link>
        )}

        {accessToken && <Button onClick={handleLogOut}>Logout</Button>}
        <DropdownMenuBar icon={CircleUser} />
      </div>
    </div>
  );
}

export default HeaderBar;
