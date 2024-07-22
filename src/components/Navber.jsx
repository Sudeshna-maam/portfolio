import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import DarkBtn from "./DarkBtn";
// import { AcmeLogo } from "./AcmeLogo.jsx";

const Navber = () => {
  return (
    <>
      <div className="">
        <Navbar>
          <NavbarBrand className="space-x-2">
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Sudeshna Saha"
              size="sm"
              src="picture.jpg"
            />
            <p className="font-bold text-xl text-purple-600">Sudeshna Saha</p>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-9" justify="center">
            <NavbarItem isActive>
              <Link className="font-medium text-xl" color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              {/* <Link href="#" aria-current="page" color="secondary"> */}
              <Link
                className="font-medium text-xl"
                color="foreground"
                href="/skills"
              >
                Skills
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link
                className="font-medium text-xl"
                color="foreground"
                href="/project"
              >
                Projects
              </Link>
            </NavbarItem>
            <DarkBtn />
          </NavbarContent>

          {/* <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="primary"
                  name="Jason Hughes"
                  size="sm"
                  //   src="img.jpeg"
                  src="picture.jpg"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent> */}
        </Navbar>
      </div>
    </>
  );
};

export default Navber;
