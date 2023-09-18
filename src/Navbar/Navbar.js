import React, { useState } from "react";

import {
  Navbar,
  NavbarContent,
  Link,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
  Tabs,
  Tab,
} from "@nextui-org/react";

const Nav = () => {
  const menuItems = ["Product", "Category", "Lear", "Support"];
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  return (
    <div className="flex w-[100%] px-16 pt-5  max-sm:px-5">
      <div className="flex flex-1 justify-start pb-5 items-center border-b-2">
        <h1 className="text-xl text-white font-bold font-mons">ILLUSTRATION</h1>
      </div>

      <div className="flex gap-12 uppercase pb-5 border-b-2 max-md:hidden text-white justify-end">
        <Tabs variant="underlined" aria-label="Tabs variants">
          <Tab title="Product" />
          <Tab title="Category" />
          <Tab title="Lear" />
          <Tab title="Support" />
        </Tabs>
      </div>
      <div className="flex gap-12 uppercase pb-5 border-b-2 md:hidden text-white justify-end">
        <Navbar
          disableAnimation
          className="bg-transparent backdrop-saturate-[-2] h-[30px]"
        >
          <NavbarContent className="md:hidden px-0" justify="end">
            <NavbarMenuToggle className="" onClick={handleClick} />
          </NavbarContent>

          <div className="">
            {click && (
              <NavbarMenu className="mt-2 px-16 max-sm:px-5">
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                      className="w-full"
                      color={"foreground"}
                      href="#"
                      size="lg"
                    >
                      {item}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            )}
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;
