import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/signup", {
        name,
        username,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/otp");
      })
      .catch((err) => console.log(err));
  };

  const [usernamel, setUsernamel] = useState();
  const [passwordl, setPasswordl] = useState();
  const navigatel = useNavigate();

  const handleSubmitl = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/login", { usernamel, passwordl })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigatel("/in");
        } else {
          navigatel("/");
          alert("You are not registered to this service, kindly signup first.");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="Login">
      <header className="flex items justify-center mb-2 ">
        <img src="images/headingn.jpg" />
      </header>
      <Tabs defaultValue="log" className="w-full max-w-xl mx-auto ">
        <TabsList className="flex items-center justify-center p-6">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent
          value="signin"
          className="flex flex-col items-center justify-center p-6 gap-3"
        >
          <form onSubmit={handleSubmitl}>
            <div className="flex flex-col items-center gap-3">
              <Label htmlFor="username" className="text-center">
                Username
              </Label>
              <Input
                id="username"
                className="form-control"
                onChange={(e) => setUsernamel(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <Label htmlFor="password" className="text-center">
                Password
              </Label>
              <Input
                id="password"
                className="form-control"
                onChange={(e) => setPasswordl(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <Link className="links" to="/passchange">
                Forgot password?
              </Link>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </TabsContent>
        <TabsContent
          value="signup"
          className="flex flex-col items-center justify-center p-6 gap-3"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-3">
              <Label htmlFor="name" className="text-center">
                Enter name:
              </Label>
              <Input
                id="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Label htmlFor="email" className="text-center">
                Enter email:
              </Label>
              <Input
                id="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Label htmlFor="username" className="text-center">
                Create username:
              </Label>
              <Input
                id="username"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Label htmlFor="password" className="text-center">
                Create password:
              </Label>
              <Input
                id="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Button type="submit">Signup</Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Login;
