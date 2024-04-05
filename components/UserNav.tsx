'use client'


import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { redirect } from "next/navigation";


export default function UserNav() {
  const { data: session } = useSession();

//   if(!session) return redirect('/login')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        
          <Avatar className="h-10 w-10 rounded-sm">
            {session?.user?.image && <AvatarImage  src={session?.user?.image} />}
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
        
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel >
            <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
            <p className="text-sm text-muted-foreground leading-none">{session?.user?.email}</p>
            </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
