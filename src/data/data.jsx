import { faBezierCurve, faCircleDot, faClock, faCoffee, faFeatherAlt, faFlaskVial, faIcons, faImages, faLightbulb, faOtter, faSmile } from "@fortawesome/free-solid-svg-icons";
import imge from '../img/blogone.jpg'
import seimg from '../img/blogtwo.jpg'
import thimg from '../img/blogthree.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// About Me ------------------------------------------------------
export const personalInfoLeft = {
  name: "Kevadiya Kishan",
  degree: "Bechelor Of Commerce",
  phone: "+91 74330 18389",
  address: "C/1403 Shivant Antilla, Motavarachha, Surat",
};

export const personalInfoRight = {
  birthday: "19 April 2002",
  experience: "18 Months",
  email: "kevadikishan51@gmail.com",
  freelance: "Available",
};


// Education ---------------------------------------------------------

export const arrEducation = [
  {
    icon: faCircleDot,
    title: "10th",
    about: "P.P. Savani Vidhyabhavn (Hirabag)",
    year: "2017",
    description:
      "Lorem ipsum dolor sitLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.dcdcsedc",
  },
  {
    icon: faCircleDot,
    title: "12th",
    about: "Ashadeep School (4)",
    year: "2019",
    description:
      "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  },
  {
    icon: faCircleDot,
    title: "Bachelor Of Commerce",
    about: "Akhand Anand (Veer Narmad University)",
    year: "2019-20 / 2021-22",
    description:
      "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  },
];


// Expericence ---------------------------------------------------------------------------------------

export const arrExpericence = [
  {
    icon: faCircleDot,
    title: "dvvnknkndkvkdvkkvnkn",
    about: "scknnskc ",
    year: "2020-2022",
    description:
      "Lorem ipsum dolor sitLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.dcdcsedc",
  },
  {
    icon: faCircleDot,
    title: "cnknkcl",
    about: "Cambridge University",
    year: "2020-2022",
    description:
      "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  },
  {
    icon: faCircleDot,
    title: "Lorem Ipsum",
    about: "Cambridge University",
    year: "2020-2022",
    description:
      "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  },
];


// Blog ------------------------------------------------------------------------------------------------

export const arryblogInfo = [
  {
      img: imge,
      date: "01",
      month: "JAN",
      blog: "Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum",
      more: "Read More"
  },
  {
      img: seimg,
      date: "19",
      month: "Apr",
      blog: "Happy Birthday To me 😉😘 um diam tempor sed rebum elitr ipsum",
      more: "Read More"
  },
  {
      img: thimg,
      date: "19",
      month: "APR",
      blog: "Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum",
      more: "Read More"
  }
];

export const figures = [
  {
    icon: <FontAwesomeIcon icon={faClock} size="3x" />,
    figure: "500",
    title: "Hours Worked",
  },
  {
    icon: <FontAwesomeIcon icon={faImages} size="3x" />,
    figure: "50K",
    title: "Project Finished",
  },
  {
    icon: <FontAwesomeIcon icon={faSmile} size="3x" />,
    figure: "200K",
    title: "Happy Clients",
  },
  {
    icon: <FontAwesomeIcon icon={faCoffee} size="3x" />,
    figure: "2K",
    title: "Happy Clients",
  },
];


// service ----------------------------------------------------------------

export const serviceInfo =[
  {
    icon: faOtter,
    title: "Web design",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: faFlaskVial,
    title: "Phtography",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: faBezierCurve ,
    title: "Web Developer",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: faLightbulb,
    title: "App Developing",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: faIcons,
    title: "Branding",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: faFeatherAlt,
    title: "Product Strategy",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
];