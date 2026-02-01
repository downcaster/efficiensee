/**
 * Typography tokens from Pegasus Design System Pro
 * Based on Figma design system specifications
 * 
 * Font families:
 * - Plus Jakarta Sans: For Display/Headings
 * - Inter: For Body text and Links
 */

export const typography = {
  fontFamily: {
    display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
    sans: ["Inter", "system-ui", "sans-serif"],
    mono: ["JetBrains Mono", "Consolas", "monospace"],
  },
  
  // Desktop Display - Plus Jakarta Sans
  display: {
    huge: {
      fontSize: "4.5rem", // 72px
      lineHeight: "4.5rem", // 72px
      fontWeight: "400",
      letterSpacing: "0.03125rem", // 0.5px
    },
    hugeBold: {
      fontSize: "4.5rem", // 72px
      lineHeight: "4.5rem", // 72px
      fontWeight: "700",
      letterSpacing: "0.03125rem", // 0.5px
    },
    large: {
      fontSize: "3.5rem", // 56px
      lineHeight: "4rem", // 64px
      fontWeight: "400",
      letterSpacing: "0.03125rem", // 0.5px
    },
    largeBold: {
      fontSize: "3.5rem", // 56px
      lineHeight: "4rem", // 64px
      fontWeight: "700",
      letterSpacing: "0.03125rem", // 0.5px
    },
    medium: {
      fontSize: "3rem", // 48px
      lineHeight: "3.5rem", // 56px
      fontWeight: "400",
      letterSpacing: "0.03125rem", // 0.5px
    },
    mediumBold: {
      fontSize: "3rem", // 48px
      lineHeight: "3.5rem", // 56px
      fontWeight: "700",
      letterSpacing: "0.03125rem", // 0.5px
    },
    small: {
      fontSize: "2.25rem", // 36px
      lineHeight: "3rem", // 48px
      fontWeight: "400",
      letterSpacing: "0.03125rem", // 0.5px
    },
    smallBold: {
      fontSize: "2.25rem", // 36px
      lineHeight: "3rem", // 48px
      fontWeight: "700",
      letterSpacing: "0.03125rem", // 0.5px
    },
    xsmall: {
      fontSize: "1.5rem", // 24px
      lineHeight: "2rem", // 32px
      fontWeight: "400",
      letterSpacing: "0.03125rem", // 0.5px
    },
  },
  
  // Desktop Text - Inter
  text: {
    large: {
      fontSize: "1.25rem", // 20px
      lineHeight: "2rem", // 32px
      fontWeight: "400",
      letterSpacing: "0.046875rem", // 0.75px
    },
    largeTight: {
      fontSize: "1.25rem", // 20px
      lineHeight: "1.5rem", // 24px
      fontWeight: "400",
      letterSpacing: "0.046875rem", // 0.75px
    },
    medium: {
      fontSize: "1.125rem", // 18px
      lineHeight: "2rem", // 32px
      fontWeight: "400",
      letterSpacing: "0.046875rem", // 0.75px
    },
    mediumTight: {
      fontSize: "1.125rem", // 18px
      lineHeight: "1.5rem", // 24px
      fontWeight: "400",
      letterSpacing: "0.046875rem", // 0.75px
    },
    small: {
      fontSize: "0.9375rem", // 15px
      lineHeight: "1.5rem", // 24px
      fontWeight: "400",
      letterSpacing: "0.046875rem", // 0.75px
    },
    smallTight: {
      fontSize: "0.9375rem", // 15px
      lineHeight: "1.25rem", // 20px
      fontWeight: "400",
      letterSpacing: "0.046875rem", // 0.75px
    },
    xsmall: {
      fontSize: "0.75rem", // 12px
      lineHeight: "1.375rem", // 22px
      fontWeight: "400",
      letterSpacing: "0.015625rem", // 0.25px
    },
    xsmallTight: {
      fontSize: "0.75rem", // 12px
      lineHeight: "0.875rem", // 14px
      fontWeight: "400",
      letterSpacing: "0.015625rem", // 0.25px
    },
  },
  
  // Desktop Link - Inter Bold
  link: {
    large: {
      fontSize: "1.25rem", // 20px
      lineHeight: "2rem", // 32px
      fontWeight: "700",
      letterSpacing: "0.046875rem", // 0.75px
    },
    largeTight: {
      fontSize: "1.25rem", // 20px
      lineHeight: "1.5rem", // 24px
      fontWeight: "700",
      letterSpacing: "0.046875rem", // 0.75px
    },
    medium: {
      fontSize: "1.125rem", // 18px
      lineHeight: "2rem", // 32px
      fontWeight: "700",
      letterSpacing: "0.046875rem", // 0.75px
    },
    mediumTight: {
      fontSize: "1.125rem", // 18px
      lineHeight: "1.5rem", // 24px
      fontWeight: "700",
      letterSpacing: "0.046875rem", // 0.75px
    },
    small: {
      fontSize: "0.9375rem", // 15px
      lineHeight: "1.5rem", // 24px
      fontWeight: "700",
      letterSpacing: "0.046875rem", // 0.75px
    },
    smallTight: {
      fontSize: "0.9375rem", // 15px
      lineHeight: "1.25rem", // 20px
      fontWeight: "700",
      letterSpacing: "0.046875rem", // 0.75px
    },
    xsmall: {
      fontSize: "0.75rem", // 12px
      lineHeight: "1.375rem", // 22px
      fontWeight: "700",
      letterSpacing: "0.015625rem", // 0.25px
    },
    xsmallTight: {
      fontSize: "0.75rem", // 12px
      lineHeight: "0.875rem", // 14px
      fontWeight: "700",
      letterSpacing: "0.015625rem", // 0.25px
    },
  },
} as const

export type TypographyToken = keyof typeof typography
