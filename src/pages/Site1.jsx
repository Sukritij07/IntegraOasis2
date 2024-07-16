import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "../sharedcomp/Header";
import Nav from "../sharedcomp/Nav";
import Footer from "../sharedcomp/Footer";

function SilkyT() {
  const { toast } = useToast();

  return (
    <div className="Resell">
      <Header />
      <div className=" bg-cyan-100 text-[50px] font-['Rage'] text-[#052747] text-center">
        Silky Tassels
      </div>
      <div className=" bg-cyan-100 text-[35px] font-['Rage'] text-[#052747] text-center">
        By Aarushi
      </div>
      <div className="flex items justify-center">
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/dikkat1.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Double Ikkat (Blue)</b>
            </h1>
            <p>
              A pattern with same colour scheme in shirt, dupatta and pant but
              with different ikkat patterns and borders.
              <br />
              Pure cotton ikkat shirt 2.5mtr, bottom 2.5mtr and dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹2000.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
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
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/ikkat1.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Ikkat on Cotton (Blue)</b>
            </h1>
            <p>
              Introducing the most light weight cotton on double ikkat pattern.
              <br />
              Summer friendly, bright colours.
              <br />
              Ikkat cotton shirt 2.5mtr, plain cotton bottoms 2.5mtr, double
              ikkat cotton dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹1800.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
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
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/south1.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>South Cotton (Blue)</b>
            </h1>
            <p>
              Extremely breathable fabric, lightweight, bright summer colour
              suits in PURE south cotton with Mangalagiri borders.
              <br />3 Piece set, 2.5mtr each fabric with Mangalagiri borders
            </p>
            <h1 className="text-[22px]">
              <b>₹1600.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
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
      <div className="flex items justify-center">
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/dikkat2.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Double Ikkat (Green)</b>
            </h1>
            <p>
              A pattern with same colour scheme in shirt, dupatta and pant but
              with different ikkat patterns and borders.
              <br />
              Pure cotton ikkat shirt 2.5mtr, bottom 2.5mtr and dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹2000.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
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
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/ikkat2.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Ikkat on Cotton (Green)</b>
            </h1>
            <p>
              Introducing the most light weight cotton on double ikkat pattern.
              <br />
              Summer friendly, bright colours.
              <br />
              Ikkat cotton shirt 2.5mtr, plain cotton bottoms 2.5mtr, double
              ikkat cotton dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹1800.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
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
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/south2.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>South Cotton (Red)</b>
            </h1>
            <p>
              Extremely breathable fabric, lightweight, bright summer colour
              suits in PURE south cotton with Mangalagiri borders.
              <br />3 Piece set, 2.5mtr each fabric with Mangalagiri borders
            </p>
            <h1 className="text-[22px]">
              <b>₹1600.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
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
      <div className="flex items justify-center">
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/dikkat3.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Double Ikkat (Maroon)</b>
            </h1>
            <p>
              A pattern with same colour scheme in shirt, dupatta and pant but
              with different ikkat patterns and borders.
              <br />
              Pure cotton ikkat shirt 2.5mtr, bottom 2.5mtr and dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹2000.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
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
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/ikkat3.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Ikkat on Cotton (Purple)</b>
            </h1>
            <p>
              Introducing the most light weight cotton on double ikkat pattern.
              <br />
              Summer friendly, bright colours.
              <br />
              Ikkat cotton shirt 2.5mtr, plain cotton bottoms 2.5mtr, double
              ikkat cotton dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹1800.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
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
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/south3.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>South Cotton (Grey)</b>
            </h1>
            <p>
              Extremely breathable fabric, lightweight, bright summer colour
              suits in PURE south cotton with Mangalagiri borders.
              <br />3 Piece set, 2.5mtr each fabric with Mangalagiri borders
            </p>
            <h1 className="text-[22px]">
              <b>₹1600.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
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
      <div className="flex items justify-center">
        <img
          src="images/silky.jpg"
          className="flex items-center justify-center h-[250px] w-[400px] mx-5 my-5"
        />
        <img
          src="images/tassels.jpg"
          className="flex items-center justify-center h-[250px] w-[400px] mx-5 my-5"
        />
      </div>
      <Nav />
      <Footer />
    </div>
  );
}

export default SilkyT;
