import jsFrameworkImg from "../assets/JS-framework.webp";
import cssFrameworkImg from "../assets/CSS-framework.webp";
import sp2ProjectImg from "../assets/SP2-project.webp";

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  thumbnail: string;
  articleImage: string;
  imageCaption: string;
  liveSiteUrl: string;
  githubReadmeUrl: string;
  technologies: string[],
}

export const projectsData: Project[] = [
  {
    id: "javascript-frameworks",
    title: "Online Shop Application",
    category: "JavaScript Frameworks",
    shortDescription: "A fully-featured e-commerce platform built with React and TypeScript, featuring a dynamic product catalog, real-time search, filtering, and a functional shopping cart.",
    longDescription: "A modern, high-performance Online Shop Application developed using React, Vite, and TypeScript. The project delivers a seamless user experience with robust global state management, dynamic client-side item filtering, and efficient API data fetching. Styled with Tailwind CSS, it features an interactive UI equipped with custom hooks, comprehensive input validation for checkout forms, and a responsive shopping cart workflow that handles item addition, quantity adjustments, and order success verification.",
    thumbnail: jsFrameworkImg,
    articleImage: jsFrameworkImg,
    imageCaption: "A fully functional, responsive e-commerce application built as part of the JavaScript Frameworks course assignment at Noroff. The project demonstrates the use of React, TypeScript, and modern UI libraries to create a seamless shopping experience.",
    liveSiteUrl: "https://fed-online-shop-updated.vercel.app",
    githubReadmeUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-saimoh-jsf/blob/main/README.md",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS",]
  },
  {
    id: "css-frameworks",
    title: "Social Blog Interface",
    category: "CSS Frameworks Assignment",
    shortDescription: "A sleek, content-focused social media blogging dashboard engineered for fluid responsiveness using HTML5 and utility-first Tailwind CSS.",
    longDescription: "A professionally styled Social Blog Interface built as a deep dive into advanced layout techniques and modern CSS frameworks. Utilizing a semantic HTML5 architecture and utility-first classes via Tailwind CSS, this interface features a fully responsive multi-pane layout that adapts perfectly across mobile, tablet, and desktop viewports. It showcases pixel-perfect implementation of UI components like clean typography hierarchies, unified grid systems, navigation sidebars, and interactive feed cards designed for high user engagement.",
    thumbnail: cssFrameworkImg,
    articleImage: cssFrameworkImg,
    imageCaption: "A sleek, content-focused social media blogging dashboard engineered for fluid responsiveness using HTML5 and utility-first Tailwind CSS.",
    liveSiteUrl: "https://css-framework-assignment.vercel.app/",
    githubReadmeUrl: "https://github.com/saimoh03/CSS-Framework-Assignment/blob/css-frameworks/README.md",
    technologies: ["HTML5", "Tailwind CSS"]
  },
  {
    id: "semester-project-2",
    title: "Auction Platform Frontend",
    category: "Semester Project 2",
    shortDescription: "An interactive, frontend auction and bidding application featuring live dynamic routing, custom search indexing, and profile credit management.",
    longDescription: "An e-commerce frontend solution crafted for a digital Auction Platform as a major Semester Project submission. Built on a foundation of vanilla JavaScript and styled cleanly with Tailwind CSS, this application handles complex client-side routing, interactive listing creation, and live bidding mechanisms. Users can browse an updated catalog with dynamic search filters, view individual item detail pages, register/login to track credit balances, and manage active listings. The final build was meticulously translated from Figma prototypes to ensure a polished user experience.",
    thumbnail: sp2ProjectImg,
    articleImage: sp2ProjectImg,
    imageCaption: "An interactive, frontend auction and bidding application",
    liveSiteUrl: "https://sp-2-semester-project.vercel.app",
    githubReadmeUrl: "https://github.com/saimoh03/SP-2-Semester-Project-submission/blob/main/README.md",
    technologies: ["HTML5", "JavaScript", "Tailwind CSS", "Figma"]
  }
];