import React, { useState, useEffect } from "react";

type ThemeToggleButtonProps = {
  lightIcon: any; // Kan vara JSX, komponent, bild – inget typat
  darkIcon: any;
};

export default function ThemeToggleButton({ lightIcon, darkIcon }: ThemeToggleButtonProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full p-2 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {isDark ? lightIcon : darkIcon}
    </button>
  );
}
