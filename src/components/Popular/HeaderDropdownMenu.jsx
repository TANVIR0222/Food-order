import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Button } from '../ui/button';
const HeaderDropdownMenu = ({navbar}) => {
    return (
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="menubtn">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-3">
                  <DropdownMenuLabel>
                    {navbar.map((item) => (
                      <div
                        key={item.id}
                        className="flex font-bold justify-start my-2 items-center"
                      >
                        <a href={item.path}>{item.title}</a>
                      </div>
                    ))}
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
   );
};

export default HeaderDropdownMenu;