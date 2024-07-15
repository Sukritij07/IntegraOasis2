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

function Buy() {
  return (
    <div className="Buy">
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
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-[#052747] border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full grid-cols-5 font-medium flex items-center justify-center">
            <Button
              variant="ghost"
              className="inline-flex flex-col items justify-center px-5 hover:bg-gray group"
            >
              <Link to="/buy">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="flex w-5 h-5 mb-2 text-white dark:text-white group-hover:text-gray-500 "
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
                      d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
                    />
                  </svg>
                  <span className="flex text-sm text-white dark:text-white group-hover:text-gray-500 ">
                    Buy
                  </span>
                </div>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="inline-flex flex-col items justify-center px-5 hover:bg-gray group"
            >
              <Link to="#">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="flex w-5 h-5 mb-2 text-white dark:text-white group-hover:text-gray-500 "
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
                      d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
                    />
                  </svg>
                  <span className="flex text-sm text-white dark:text-white group-hover:text-gray-500 ">
                    Learn
                  </span>
                </div>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="inline-flex flex-col items justify-center px-5 hover:bg-gray group"
            >
              <Link to="/in">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="flex w-5 h-5 mb-2 text-white dark:text-white group-hover:text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  <span className="flex text-sm text-white dark:text-white group-hover:text-gray-500 ">
                    Home
                  </span>
                </div>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="inline-flex flex-col items justify-center px-5 hover:bg-gray group"
            >
              <Link to="/resell">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="flex w-5 h-5 mb-2 text-white dark:text-white group-hover:text-gray-500 "
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
                      d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                    />
                  </svg>
                  <span className="flex text-sm text-white dark:text-white group-hover:text-gray-500 ">
                    Resell
                  </span>
                </div>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="inline-flex flex-col items justify-center px-5 hover:bg-gray group"
            >
              <Link to="/cart">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="flex w-5 h-5 mb-2 text-white dark:text-white group-hover:text-gray-500 "
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
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  <span className="flex text-sm text-white dark:text-white group-hover:text-gray-500 ">
                    Cart
                  </span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
    </div>
  );
}

export default Buy;
