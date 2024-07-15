import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Header from "../sharedcomp/Header";
import Nav from "../sharedcomp/Nav";

function Buy() {
  return (
    <div className="Buy">
      <Header />
      <Nav />
    </div>
  );
}

export default Buy;
