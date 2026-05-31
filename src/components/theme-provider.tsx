"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export const THEME_LIST = [
  {
    id: "light",
    name: "Light",
    description: "Clean & modern",
    icon: "☀️",
    preview: ["#ffffff", "#7c3aed", "#f1f5f9"],
  },
  {
    id: "dark",
    name: "Dark",
    description: "Easy on the eyes",
    icon: "🌙",
    preview: ["#0a0a1a", "#a78bfa", "#1e293b"],
  },
  {
    id: "aesthetic",
    name: "Aesthetic",
    description: "Pastel & dreamy",
    icon: "🌸",
    preview: ["#f9f0f5", "#d4729c", "#e8d5ec"],
  },
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Stark & clean",
    icon: "🖊️",
    preview: ["#ffffff", "#1a1a1a", "#f5f5f5"],
  },
  {
    id: "xp",
    name: "Windows XP",
    description: "Classic nostalgia",
    icon: "🪟",
    preview: ["#e8f0fa", "#1a6bbf", "#5cb85c"],
  },
  {
    id: "y2k",
    name: "Y2K Web",
    description: "Early 2000s chaos",
    icon: "🌐",
    preview: ["#1a1a3e", "#ff3399", "#66ff33"],
  },
] as const;

export type ThemeId = (typeof THEME_LIST)[number]["id"];
