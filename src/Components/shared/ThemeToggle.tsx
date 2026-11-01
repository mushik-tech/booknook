"use client";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

import { Moon, Sun } from "@gravity-ui/icons";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({ isSelected }) => (
        <Switch.Content>
          <Switch.Control
            className={`h-8.75 w-13.75 rounded-2xl bg-blue-500 ${isSelected ? "bg-cyan-500 " : ""}`}
          >
            <Switch.Thumb
              className={`size-6.75 bg-white shadow-sm rounded-2xl ${isSelected ? "-ms-1.5 shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-3 text-inherit opacity-100" />
                ) : (
                  <Moon className="size-3 text-inherit opacity-70" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </Switch.Content>
      )}
    </Switch>
  );
};

export default ThemeToggle;
