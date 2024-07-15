import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Passchange() {
  return (
    <div className="Passchange">
      <header className="flex items justify-center mb-2 ">
        <img src="images/headingn.jpg" />
      </header>
      <div className="flex flex-col items-center gap-3">
        <Label className="text-[20px]" htmlFor="email">
          Enter your registered e-mail id
        </Label>
        <Input id="email" type="email" className="w-1/3" />
      </div>
      <div className="flex flex-col items-center gap-3 mt-3">
        <Button>
          <Link to="#">Submit</Link>
        </Button>
      </div>
    </div>
  );
}

export default Passchange;
