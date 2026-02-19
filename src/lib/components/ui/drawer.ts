import { dialogAnatomy } from "@ark-ui/svelte";
import { sva } from "styled-system/css";

const anatomy = dialogAnatomy.extendWith("header", "body", "footer");

export const drawer = sva({
  className: "drawer",
  slots: [...anatomy.keys()],
  base: {
    backdrop: {
      backdropFilter: "auto",
      backdropBlur: "sm",
      bg: "neutral.100/10",
      height: "100vh",
      left: "0",
      position: "fixed",
      top: "0",
      width: "100vw",
      zIndex: "1000",
      _open: {
        animation: "backdrop-in",
      },
      _closed: {
        animation: "backdrop-out",
      },
    },
    positioner: {
      alignItems: "center",
      display: "flex",
      height: "100dvh",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      width: { base: "75vw", sm: "sm" },
      zIndex: "1001",
    },
    content: {
      background: "neutral.100",
      display: "grid",
      divideY: "1px",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr auto",
      gridTemplateAreas: `
        'header'
        'body'
        'footer'
      `,
      height: "full",
      width: "full",
      zIndex: "1001",
      _hidden: {
        display: "none",
      },
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      gridArea: "header",
      pt: { base: "4", md: "6" },
      pb: "4",
      px: { base: "4", md: "6" },
    },
    body: {
      display: "flex",
      flexDirection: "column",
      gridArea: "body",
      overflow: "auto",
      p: { base: "4", md: "6" },
    },
    footer: {
      display: "flex",
      gridArea: "footer",
      justifyContent: "flex-end",
      py: "4",
      px: { base: "4", md: "6" },
    },
    title: {
      color: "fg.default",
      fontWeight: "semibold",
      textStyle: "xl",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
  },
  defaultVariants: {
    variant: "right",
  },
  variants: {
    variant: {
      left: {
        positioner: {
          left: 0,
        },
        content: {
          _open: {
            animation: "drawer-in-left",
          },
          _closed: {
            animation: "drawer-out-left",
          },
        },
      },
      right: {
        positioner: {
          right: 0,
        },
        content: {
          _open: {
            animation: "drawer-in-right",
          },
          _closed: {
            animation: "drawer-out-right",
          },
        },
      },
    },
  },
});
