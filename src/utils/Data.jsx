import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { PiFileCppDuotone } from "react-icons/pi";
import { FaJava } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import Techno from '../images/Technokratos-ems.png'
import Grub from '../images/grubExpress.png'
import Netflix from '../images/netflixClone.png' 
import Hogar from '../images/HogarClone.png'
import Portfolio from '../images/portfolioWeb.png'
import SidCupGolf from '../images/sidCupClone.png'
import Pass from '../images/passwordGenerator.png'
import Contact from '../images/contactImg.png'

export const IMG_URL =
  "https://github.com/sachinchauhan010/PortfolioProject/tree/master/src/images/";

export const projectList = [
  {
    id: "01",
    liveLink: "https://technokratos-ems.vercel.app/",
    gitLink: "https://github.com/alokVerma749/technokratos-ems",
    imageLink:Techno,
    webName: "Technokratos-EMS",
  },
  {
    id: "02",
    liveLink: "https://grubexpress.vercel.app/",
    gitLink: "https://github.com/sachinchauhan010/GrubExpressApp",
    imageLink: Grub,
    webName: "Grub Express",
  },
  {
    id: "03",
    liveLink: "https://netflixsachin.vercel.app/",
    gitLink: "https://github.com/sachinchauhan010/Netflix_clone",
    imageLink:Netflix,
    webName: "Netflix Clone",
  },
  {
    id: "04",
    liveLink: "https://sachinpassword.vercel.app/",
    gitLink: "https://github.com/sachinchauhan010/Password",
    imageLink: Pass,
    webName: "Password Generator",
  },
  {
    id: "05",
    liveLink: "https://hogarbook.vercel.app/",
    gitLink: "https://github.com/sachinchauhan010/Hogar",
    imageLink: Hogar,
    webName: "Hogar Clone",
  },

  {
    id: "06",
    liveLink: "https://chauhansachin.vercel.app/",
    gitLink: "https://github.com/sachinchauhan010/portfolio",
    imageLink: Portfolio,
    webName: "Portfolio",
  },
  {
    id: "07",
    liveLink: "https://sidcupfamilygolf.vercel.app/",
    gitLink: "https://github.com/sachinchauhan010/sidcup_Family_Golf",
    imageLink:SidCupGolf,
    webName: "Sid Cup Family Golf",
  },
];

export const contactImg = Contact

export const Tools=[
 
  {
    id:1,
    name:"HTML",
    imgLink: <IoLogoHtml5/>
  },
  {
    id:2,
    name:"CSS",
    imgLink: <IoLogoCss3/>
  },
  {
    id:3,
    name:"JavaScript",
    imgLink: <IoLogoJavascript/>
  },
  {
    id:4,
    name:"Tailwind",
    imgLink:<SiTailwindcss/>
  },
  {
    id:5,
    name:"Node JS",
    imgLink:<FaNodeJs/>
  },
  {
    id:6,
    name:"Express JS",
    imgLink:<SiExpress/>
  },
  {
    id:7,
    name:"Mongo DB",
    imgLink:<SiMongodb/>
  },
  {
    id:8,
    name:"React Js",
    imgLink:<IoLogoReact/>
  },
  {
    id:9,
    name:"Git",
    imgLink: <FaGitAlt/>
  },
  {
    id:10,
    name:"Git hub",
    imgLink: <FaGithub/>,
  },
  {
    id:11,
    name:"C++",
    imgLink:<PiFileCppDuotone/>,
  },
  {
    id:12,
    name:"JAVA",
    imgLink:<FaJava/>
  },
  {
    id:13,
    name:"SQL",
    imgLink:<SiMysql/>,
  },

];

export const Education=[
  {
    id:1,
    degree:"High School",
    marks:"89.33%",
    college:"Mukhai Smarak UMV Gokulpura Mau",
    year:"2018"
  },
  
  {
    id:2,
    degree:"Inter",
    marks:"87.8%",
    college:"Ram Nagina Inter College",
    year:"2020"
  },
  {
    id:3,
    degree:"Graducation",
    marks:"8.74 CGPA",
    college:"PGDAV College University of Delhi",
    year:"2020-2023"
  },
  {
    id:4,
    degree:"Post Graducation",
    marks:"9.35 CGPA",
    college:"Madan Mohan Malaviya University of Technology, Gorkhpur",
    year:"2023-2025",
  },
]
