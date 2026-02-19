import { defineConfig } from "@pandacss/dev";
import typographyPreset from "pandacss-preset-typography";

import { textStyles } from "./src/lib/components/ui/text-styles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Presets
  presets: [typographyPreset(), "@pandacss/preset-panda"],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,ts,svelte}", "./pages/**/*.{js,ts,svelte}"],

  // Files to exclude
  exclude: [],

  // Global vars
  globalCss: {
    html: {
      "--global-font-body": "IBM Plex Sans Variable, sans-serif",
    },
  },

  globalVars: {
    "--font-ibm-plex-serif": "IBM Plex Serif, serif",
    "--font-ibm-plex-sans": "IBM Plex Sans Variable, sans-serif",
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          ibmSans: { value: "var(--font-ibm-plex-sans), sans-serif" },
          ibmSerif: { value: "var(--font-ibm-plex-serif), serif" },
        },
      },
      textStyles,
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: {
              value: {
                base: "#FF4136",
              },
            },
            subtle: { value: { base: "{colors.amber.200}" } },
            muted: { value: { base: "{colors.neutral.200}" } },
            emphasized: { value: { base: "{colors.amber.800}" } },
            inverted: { value: "#000" },
            panel: { value: "#fff" },
            error: { value: "#fef2f2" },
            warning: { value: "#fff7ed" },
            success: { value: "#f0fdf4" },
            info: { value: "#eff6ff" },
          },

          border: {
            DEFAULT: { value: "#e5e7eb" },
            muted: { value: "#f3f4f6" },
            subtle: { value: "#f9fafb" },
            emphasized: { value: "#d1d5db" },
            inverted: { value: "#1f2937" },
            error: { value: "#ef4444" },
            warning: { value: "#f59e42" },
            success: { value: "#22c55e" },
            info: { value: "#3b82f6" },
          },

          fg: {
            DEFAULT: { value: "{colors.neutral.900}" },
            muted: { value: "{colors.neutral.600}" },
            subtle: { value: "#9ca3af" },
            inverted: { value: "#f9fafb" },
            error: { value: "#ef4444" },
            warning: { value: "#ea580c" },
            success: { value: "#16a34a" },
            info: { value: "#2563eb" },
            primary: { value: "{colors.amber.500}" },
          },

          accent: {
            contrast: { value: "#000" },
            fg: { value: "#c2410c" },
            subtle: { value: "#ffedd5" },
            muted: { value: "#fed7aa" },
            emphasized: { value: "#fdba74" },
            solid: { value: "#ea580c" },
            focusRing: { value: "#fb923c" },
          },
        },
        shadows: {
          sm: {
            value: "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
          },
          md: {
            value: "0 4px 8px -2px rgba(16, 24, 40, 0.18), 0 1.5px 4px rgba(16, 24, 40, 0.14)",
          },
          lg: {
            value: "0 8px 24px rgba(16, 24, 40, 0.18), 0 1.5px 4px rgba(16, 24, 40, 0.08)",
          },
        },
      },
      keyframes: {
        "slide-fade-in": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-8px)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
