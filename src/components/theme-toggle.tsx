"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Palette, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { THEME_LIST } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Choose theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Choose Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {THEME_LIST.map((t) => {
          const isActive = mounted && theme === t.id
          return (
            <DropdownMenuItem
              key={t.id}
              onClick={() => setTheme(t.id)}
              className="flex items-center gap-3 py-2.5 px-3 cursor-pointer"
            >
              {/* Color preview dots */}
              <div className="flex items-center -space-x-1 shrink-0">
                {t.preview.map((color, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full border border-border/60"
                    style={{
                      backgroundColor: color,
                      zIndex: 3 - i,
                    }}
                  />
                ))}
              </div>

              {/* Theme info */}
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-sm font-medium leading-tight flex items-center gap-1.5">
                  <span>{t.icon}</span>
                  {t.name}
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight">
                  {t.description}
                </span>
              </div>

              {/* Active indicator */}
              {isActive && (
                <Check className="w-4 h-4 text-primary shrink-0" />
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
