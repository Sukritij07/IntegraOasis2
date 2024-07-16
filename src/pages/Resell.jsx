import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "../sharedcomp/Header";
import Nav from "../sharedcomp/Nav";
import Footer from "../sharedcomp/Footer";

function Resell() {
  const { toast } = useToast();

  return (
    <div className="Resell">
      <Header />
      <div className=" bg-cyan-100 text-[50px] font-['Rage'] text-[#052747] text-center">
        Resell
      </div>
      <div className=" bg-cyan-100 text-[35px] font-['Rage'] text-[#052747] text-center">
        Buy and Sell second hand items
      </div>
      <div className="flex items justify-center">
        <Card className="w-[250px] h-[400px] mx-6 my-5">
          <CardContent>
            <img
              src="images/resell1.webp"
              className="flex items-center justify-center h-[200px] w-[250px] mb-3 mt-6 rounded"
            />
            <h2>
              1 Time used Jwellery Box <br />
              (6 pieces)
            </h2>
            <p>Dimensions : 20cmX15cm</p>
            <h1 className="text-[22px]">
              <b>₹49.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[110px] my-3"
              onClick={() => {
                toast({
                  title: "Item added to cart",
                  action: (
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  ),
                });
              }}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[250px] h-[400px] mx-6 my-5">
          <CardContent>
            <img
              src="images/resell2.webp"
              className="flex items-center justify-center h-[200px] w-[250px] mb-3 mt-6 rounded"
            />
            <h2>
              Panasonic Lumix DMC-TZ60 18.1 MP Grade <br />
              'Fair' Used
            </h2>
            <h1 className="text-[22px]">
              <b>₹18,206.07</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[110px] my-3"
              onClick={() => {
                toast({
                  title: "Item added to cart",
                  action: (
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  ),
                });
              }}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[250px] h-[400px] mx-6 my-5">
          <CardContent>
            <img
              src="images/resell3.webp"
              className="flex items-center justify-center h-[200px] w-[250px] mb-3 mt-6 rounded"
            />
            <h2>
              Relic Women Watch Stainless Steel Silver Gold Water Resist White
            </h2>
            <h1 className="text-[22px]">
              <b>₹2,930.38</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[110px] my-3"
              onClick={() => {
                toast({
                  title: "Item added to cart",
                  action: (
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  ),
                });
              }}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[250px] h-[400px] mx-6 my-5">
          <CardContent>
            <img
              src="images/resell4.webp"
              className="flex items-center justify-center h-[200px] w-[250px] mb-3 mt-6 rounded"
            />
            <h2>
              Vtg Shevron Shipping Quality Nylon Jacket - Made in USA, Size : L
            </h2>
            <h1 className="text-[22px]">
              <b>₹7,286.17</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[110px] my-3"
              onClick={() => {
                toast({
                  title: "Item added to cart",
                  action: (
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  ),
                });
              }}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </div>
      <Nav />
      <Footer />
    </div>
  );
}

export default Resell;
