import { MdLocationPin, MdAlarm } from "react-icons/md";
import logo from "../assets/media/logo_new.jpg";
import Navbar from "./Navbar";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
function Header() {
  return (
    <div className="flex justify-between items-center container mx-auto p-4">
      <a href="/" className="">
        <img src={logo} alt="watoto coding logo" className="w-16 md:w-24" />
      </a>
      <div className="flex space-x-2 md:space-x-16">
        <div className="location-section flex space-x-3">
          <MdLocationPin className="text-2xl md:text-4xl text-yellow-1" />
          <div className="flex flex-col text-white text-sm md:text-md">
            <p>Kibera, Langata</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
        <div className="open-time-section flex space-x-3">
          <MdAlarm className="text-2xl md:text-4xl text-red" />
          <div className="flex flex-col text-white text-sm md:text-md">
            <p>Open Saturday</p>
            <p>Time: 8.00AM-5.00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
