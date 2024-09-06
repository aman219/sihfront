import "../styles/navbar.css";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="grid">
      <Navbar />
    </div>
  );
};

const Navbars = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="navbar"
    >
      <Tab setPosition={setPosition}>Dashboard</Tab>
      <Tab setPosition={setPosition}>Reports</Tab>
      <Tab setPosition={setPosition}>analytics</Tab>
      <Tab setPosition={setPosition}>support</Tab>
      <Tab setPosition={setPosition}>setting</Tab>
      {}
      {position.width > 0 && position.opacity > 0 && (
        <Cursor position={position} />
      )}
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="tab tab-large"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      initial={{ opacity: 0 }} // Ensure cursor starts hidden
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="cursor"
    />
  );
};
export default Navbars;