import type { Route } from "./+types/home";
import { About } from "../about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "Welcome to About page" },
  ];
}

export default function AboutRoute() {
  return <About />;
}