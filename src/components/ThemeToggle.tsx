import { Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { MoonStars } from "phosphor-react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
      const storedTheme = localStorage.getItem("victor's_portifolio_theme");
      return storedTheme ? storedTheme === "dark" : true;
    });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("victor's_portifolio_theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("victor's_portifolio_theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  }

  return (
    <button onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}>
      {isDarkMode
        ? <Sun className="h-6 w-6 text-yellow-300" />
        : <MoonStars weight="fill" fill="#3067dd" className="h-6 w-6 text-blue-900" />}
    </button>
  );
}