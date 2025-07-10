import { cva } from "styled-system/css";

export const buttonRecipe = cva({
	base: {
		display: "inline-flex",
		appearance: "none",
		justifyContent: "center",
		alignItems: "center",
		userSelect: "none",
		position: "relative",
		borderRadius: "md",
		whiteSpace: "nowrap",
		verticalAlign: "middle",
		borderWidth: "1px",
		borderColor: "transparent",
		cursor: "pointer",
		flexShrink: "0",
		lineHeight: "1.2",
		isolation: "isolate",
		fontWeight: "medium",
		transitionProperty: "all",
		transitionDuration: "normal",
		_disabled: {
			color: "fg.subtle",
			cursor: "not-allowed",
			opacity: "0.6",
			pointerEvents: "none",
		},
		_icon: {
			flexShrink: "0",
		},
		_focusVisible: {
			outline: "2px solid #c4c4c4",
			outlineOffset: "2px",
		},
	},
	variants: {
		size: {
			sm: {
				h: "9",
				minW: "9",
				px: "3.5",
				textStyle: "sm",
				gap: "2",
				_icon: {
					width: "4",
					height: "4",
				},
			},
			md: {
				h: "10",
				minW: "10",
				textStyle: "sm",
				px: "4",
				gap: "2",
				_icon: {
					width: "5",
					height: "5",
				},
			},
			lg: {
				h: "11",
				minW: "11",
				textStyle: "md",
				px: "5",
				gap: "3",
				_icon: {
					width: "5",
					height: "5",
				},
			},
		},

		variant: {
			solid: {
				bg: "bg",
				color: "fg.inverted",
				borderColor: "transparent",
				_hover: {
					bg: "bg/90",
				},
				_expanded: {
					bg: "color-mix(in srgb, var(--button-bg) 80%, #000 20%)",
				},
			},

			subtle: {
				bg: "transparent",
				color: "fg",
				borderColor: "transparent",
				_hover: {
					bg: "bg",
					color: "fg",
				},
				_expanded: {
					bg: "bg",
					color: "fg",
				},
			},
			outline: {
				borderWidth: "1px",
				borderColor: "border",
				color: "fg.muted",
				_hover: {
					bg: "bg.subtle",
				},
				_expanded: {
					bg: "bg.subtle",
				},
			},
		},
	},
	defaultVariants: {
		size: "sm",
		variant: "outline",
	},
});
