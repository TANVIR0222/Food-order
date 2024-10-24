import React from "react";
import { Card } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Register from "./Resigter";
const UserLoginFrom = () => {
  return (
    <div className="">
      <div className=" items-center justify-center h-auto">
        <section className=" h-80 bg-primarybg ">
          <div className=" flex flex-col items-center justify-center h-full">
            <div className="">
              <h1 className=" text-3xl capitalize">Hello </h1>
            </div>
          </div>
        </section>
        <div className="flex iitems-center justify-center h-auto  my-10">
          <Tabs defaultValue="account" className="w-[400px] ">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Login</TabsTrigger>
              <TabsTrigger value="password">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <Login />
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                {/* <Register */}
                <Register />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserLoginFrom;
