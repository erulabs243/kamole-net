import { sva } from "styled-system/css";

export const cardSlotRecipe = sva({
	slots: ["root", "header", "image", "body", "footer", "title", "description"],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
			borderRadius: "sm",
			overflow: "hidden",
			boxShadow: "sm",
		},
		image: {
			width: "full",
			height: "auto",
			objectFit: "cover", // Prevents distortion
			aspectRatio: "16/9", // Optional: Enforce aspect ratio (remove if unnecessary)
		},
		header: {
			p: "4",
		},
		body: {
			p: "4",
			flex: "1",
		},
		footer: {
			p: "4",
		},
		title: {
			textStyle: "lg",
			fontWeight: "semibold",
			color: "fg",
			_hover: { color: "fg.primary" },
		},
		description: {
			textStyle: "sm",
			color: "fg.muted",
			mt: "1",
		},
	},
	variants: {
		// --------- Variant (elevated, outline, ghost) ---------
		variant: {
			elevated: {
				root: {
					boxShadow: "md",
					borderWidth: "0",
				},
			},
			outline: {
				root: {
					borderWidth: "1px",
					borderColor: "border",
					boxShadow: "none",
				},
			},
			ghost: {
				root: {
					bg: "transparent",
					boxShadow: "none",
					borderWidth: "0",
				},
			},
		},
		// --------- Size (sm, md, lg) ---------
		size: {
			sm: {
				root: { gap: "2" },
				header: { p: "3" },
				body: { p: "3" },
				footer: { p: "3" },
			},
			md: {
				root: { gap: "3" },
				header: { p: "4" },
				body: { p: "4" },
				footer: { p: "4" },
			},
			lg: {
				root: { gap: "4" },
				header: { p: "6" },
				body: { p: "6" },
				footer: { p: "6" },
			},
		},
	},
	// --------- Default Variants ---------
	defaultVariants: {
		variant: "ghost",
		size: "md",
	},
});
