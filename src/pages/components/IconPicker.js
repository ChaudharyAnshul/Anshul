import React from 'react';
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { PiFileCssFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";


export const getIconByString = ( iconName ) => {
  switch (iconName.toLowerCase()) {
    case 'python':
      return <FaPython color='#fff'/>;
    case 'react':
      return <FaReact color='#fff'/>;
    case 'java':
      return <FaJava color='#fff'/>;
    case 'mongodb':
      return <SiMongodb color='#fff'/>;
    case 'jupyter':
      return <SiJupyter color='#fff'/>;
    case 'csharp':
      return <TbBrandCSharp color='#fff'/>;
    case 'javascript':
      return <IoLogoJavascript color='#fff'/>;
    case 'html':
      return <FaHtml5 color='#fff'/>;
    case 'laravel':
      return <FaLaravel color='#fff'/>;
    case 'mysql':
      return <SiMysql color='#fff'/>;
    case 'django':
      return <SiDjango color='#fff'/>;
    case 'css':
      return <PiFileCssFill color='#fff'/>;
    case 'linkedin':
        return <FaLinkedin color='#fff'/>;
    case 'github':
      return <FaGithub color='#fff'/>;
    case 'kaggle':
      return <SiKaggle  color='#fff'/>;
    case 'instagram':
      return <FaInstagramSquare color='#fff'/>;
    // Add more cases for other icons as needed
    default:
      return null; // Return null for unsupported icon names
  }
};