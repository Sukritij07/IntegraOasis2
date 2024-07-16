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
import { Skeleton } from "@/components/ui/skeleton";
import Header from "../sharedcomp/Header";

function Cart() {
  return (
    <div className="Cart">
      <Header />
      <div className="flex text-[#052747] text-[50px] font-['Rage'] items justify-center">
        <Button className="mt-3 mr-[550px] h-[40px] w-[40px] bg-[#052747]">
          <Link to="/in">
            <svg
              className="flex w-9 h-9 mb-2 text-white dark:text-white group-hover:text-gray-500 items justify-center"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 22 22"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </Link>
        </Button>
        <h1 className="mr-[590px]">Shopping Bag</h1>
      </div>
      <div className="flex flex-col ml-20 mb-10 space-y-3">
        <Skeleton className="h-[125px] w-[500px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <Skeleton className="h-[125px] w-[500px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="fixed w-full h-[60px] bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 bottom-1">
        <div className="flex items justify-center">
          <Button className="flex w-[240px] h-[50px] bg-[#052747] gap-x-3 mt-1 ml-[1000px] mr-20">
            <Link className="links" to="/checkout">
              Checkout
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
