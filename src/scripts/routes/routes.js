import Home from "../views/pages/home";
import About from "../views/pages/about";
import Skills from "../views/pages/skills";
import Certifications from "../views/pages/certification";
import Project from "../views/pages/project";
import Contact from "../views/pages/contact";

const routes = {
  "/": Home, // default page
  "/about": About,
  "/skills": Skills,
  "/certifications": Certifications,
  "/project": Project,
  "/contact": Contact,
};

export default routes;
