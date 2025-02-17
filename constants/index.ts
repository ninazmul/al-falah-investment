export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About Us",
    route: "/about",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  {
    label: "Events",
    route: "/events",
  },
  {
    label: "Resources",
    route: "/resources",
  },
  // {
  //   label: "Our Partners",
  //   route: "/partners",
  // },
  {
    label: "Contact Us",
    route: "/contact",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  createdAt: new Date(),
  imageUrl: "",
  url: "",
};

export const resourceDefaultValues = {
  heading: "",
  image: "",
  link: "",
  category: "",
};