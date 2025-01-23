import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import { LogIn, Shield } from "lucide-react";
import MobileNav from "./MobileNav";
import { auth } from "@clerk/nextjs/server";
import { getUserEmailById } from "@/lib/actions/user.actions";
import { isAdmin } from "@/lib/actions/admin.actions";

export default async function Header() {
  const { sessionClaims } = await auth();
  const userId = sessionClaims?.userId as string;
  const email = await getUserEmailById(userId);
  const adminStatus = await isAdmin(email);

  return (
    <header className="w-full text-primary-900 bg-[#f6eedd]">
      {/* Top Section */}
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/images/logo.png"
            width={100}
            height={100}
            alt="Al Falah Investment logo"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="hidden md:flex text-lg md:text-2xl lg:text-4xl font-serif font-bold">
              Al Falah Investment
            </h1>
            <h1 className="md:hidden text-lg md:text-2xl lg:text-4xl font-serif font-bold">
              Al Falah <br /> Investment
            </h1>
            <i className="hidden md:flex top-10 text-xs text-center justify-center lg:text-sm w-full">
              Invest In Your Ultimate Success
            </i>
          </div>
        </Link>
      </div>

      <hr className="border-t border-gray-300" />

      {/* Navigation Section */}
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Navigation Links */}
        <div className="hidden lg:flex gap-8">
          <NavItems />
        </div>
        <MobileNav />

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <SignedIn>
            {adminStatus && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex items-center gap-2 rounded-full border-gray-300 hover:bg-gray-100"
              >
                <Link href="/dashboard">
                  <Shield className="w-4 h-4" />
                  Admin
                </Link>
              </Button>
            )}
            <UserButton afterSwitchSessionUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2 rounded-full border-gray-300 hover:bg-gray-100"
            >
              <Link href="/sign-in">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
