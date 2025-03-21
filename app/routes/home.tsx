import type { Route } from "./+types/home";

import { HomePage } from "../pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hem" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
