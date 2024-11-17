import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { CheckboxWithText } from "./CheckboxWithText";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm w-[480px]">
      <CardHeader>
        <CardTitle className="text-2xl flex justify-center">
          <Image src="/logo.svg" alt="Logo" width={174} height={26} />
        </CardTitle>
        <CardDescription className="text-center ">
          Your Social Campaigns
        </CardDescription>
      </CardHeader>
      <CardContent className="text-[#2A3547] text-[14px] font-normal">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">UserName</Label>
            <Input id="email" type="email" required />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" required />
            <div>
              <div className="flex justify-between pt-4">
                <CheckboxWithText />
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm text-[#5D87FF]"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full">
            <Link href='/'>Signin</Link>
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Need to Modernize?{" "}
          <Link href="/authentication/register" className="text-[#5D87FF]">
            Create an account
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
