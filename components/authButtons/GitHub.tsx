'use client'

import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function GitHub() {
  return (
    <Button onClick={() => signIn("github")} variant={"outline"} size={"icon"}>
      <FaGithub className="text-white w-5 h-5" />
    </Button>
  );
}
