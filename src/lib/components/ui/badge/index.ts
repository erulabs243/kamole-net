import { cva } from "styled-system/css";

export const badgeRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "semibold",
    borderRadius: "full", // Pill shape (use 'md' for rounded squares)
    whiteSpace: "nowrap",
  },
  variants: {
    // --------- Variant (solid, outline, subtle) ---------
    variant: {
      solid: {
        bg: "bg",
        color: "white",
      },
      outline: {
        borderWidth: "1px",
        borderColor: "bg.muted",
        color: "fg.muted",
      },
      subtle: {
        bg: "bg.subtle",
        color: "fg.subtle",
      },
    },
    // --------- Size (sm, md, lg) ---------
    size: {
      sm: { px: "2", py: "0.5", textStyle: "xs" },
      md: { px: "2.5", py: "1", textStyle: "sm" },
      lg: { px: "3", py: "1.5", textStyle: "md" },
    },
  },
  // --------- Default Variants ---------
  defaultVariants: {
    variant: "subtle",
    size: "md",
  },
});
