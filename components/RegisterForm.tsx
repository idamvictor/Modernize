// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export function RegisterForm() {
//   return (
//     <Card className="mx-auto max-w-sm">
//       <CardHeader>
//         <CardTitle className="text-2xl">Register</CardTitle>
//         <CardDescription>
//           Enter your email below to login to your account
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               required
//             />
//           </div>
//           <div className="grid gap-2">
//             <div className="flex items-center">
//               <Label htmlFor="password">Password</Label>
//               <Link href="#" className="ml-auto inline-block text-sm underline">
//                 Forgot your password?
//               </Link>
//             </div>
//             <Input id="password" type="password" required />
//           </div>
//           <Button type="submit" className="w-full">
//             Login
//           </Button>
//           <Button variant="outline" className="w-full">
//             Login with Google
//           </Button>
//         </div>
//         <div className="mt-4 text-center text-sm">
//           Don&apos;t have an account?{" "}
//           <Link href="/authentication/register" className="underline">
//             Sign up
//           </Link>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { FormEvent, useState } from "react"
import { useSubmitForm } from "@/hooks/createUser"
import { navigate } from "@/app/(root)/actions"
// import { redirect } from "next/navigation"



export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  
  const { submitForm, loading} = useSubmitForm();

const  handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
  e.preventDefault()
  const responseData = await submitForm(email, password, confirm);
  if(responseData && responseData.email) {
    navigate("/authentication/login")
  }
}

  return (
    <Card className="mx-auto max-w-sm w-[480px]">
      <CardHeader>
        <CardTitle className="text-2xl flex justify-center"><Image src="/logo.svg" alt="Logo" width={174} height={26}/></CardTitle>
        <CardDescription className="text-center ">
          Your Social Campaigns
        </CardDescription>
      </CardHeader>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <CardContent className="text-[#2A3547] text-[14px] font-normal">
        <div className="grid gap-4">
          <div className="grid gap-2">           
            <Label htmlFor="name">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Confirm Password</Label>
              {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>
            <Input id="password" type="password" required value={confirm}
              onChange={(e)=>setConfirm(e.target.value)} />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            Signup
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
        
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/authentication/login" className="text-[#5D87FF]">
            Sign in
          </Link>
        </div>
        
      </CardContent>
      </form>
    </Card>
  )
}
