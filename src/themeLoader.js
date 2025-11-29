// Apply theme before React loads to prevent flashing
const storedTheme = localStorage.getItem("theme") || "light";
document.documentElement.classList.toggle("dark", storedTheme === "dark");
