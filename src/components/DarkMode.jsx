import React, { useState, useEffect } from "react";

function DarkMode() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex justify-center py-5 bg-bodyLight dark:bg-bodyDark">
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="   bg-gray-200 text-xl h-8 w-8  rounded-full"
      >
        {theme === "dark" ? "🌙" : "🌞"}
      </button>
    </div>
  );
}

export default DarkMode;
