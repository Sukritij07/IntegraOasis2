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

function Cart() {
  return (
    <div className="Cart">
      <header className="bg-[#052747] text-[aliceblue] flex h-[80px] items-center justify-between">
        <nav className="flex items-center justify-between">
          <Button
            variant="ghost"
            className="flex text-[30px] font-['Rage'] ml-3"
            asChild
          >
            <Link className="links" to="/about">
              About us
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="flex text-[30px] font-['Rage'] ml-3"
            asChild
          >
            <Link className="links" to="/contact">
              Contact us
            </Link>
          </Button>
        </nav>
        <img
          src="images/ioh.jpg"
          className="flex items-center justify-center h-[80px] w-[250px] ml-[90px]"
        />
        <nav className="flex items-center justify-between">
          <div class="relative w-full">
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 text-['Georgia'] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search.."
              required
            />
          </div>
          <button
            type="submit"
            class="p-2.5 ms-2 text-sm font-medium text-[#052747] bg-white rounded-lg border border-white hover:bg-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="flex text-[30px] font-['Rage'] mr-3 ml-3"
              >
                Profile
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Profile</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  Name: {"Sukriti"}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  Username: {"suk07"}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
      <div className="flex text-[#052747] text-[50px] font-['Rage'] items justify-center">
        <h1>Shopping Bag</h1>
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
      <Button className="flex bg-[#052747] gap-x-3 ml-20 mr-20" asChild>
        <Link className="links" to="/checkout">
          Checkout
        </Link>
      </Button>
      <div className="flex flex-col items-center gap-3 mt-5">
        <Button variant="outline">
          <Link to="/in">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default Cart;
