/**
 * Color tokens from Pegasus Design System Pro
 * Dark mode only configuration
 */

export const colors = {
  // Background colors
  background: "0 0% 3.9%",
  foreground: "0 0% 98%",
  
  // Card colors
  card: "240 5.9% 10%",
  cardForeground: "240 4.8% 95.9%",
  
  // Popover colors
  popover: "0 0% 3.9%",
  popoverForeground: "0 0% 98%",
  
  // Primary colors
  primary: "0 0% 98%",
  primaryForeground: "0 0% 9%",
  
  // Secondary colors
  secondary: "0 0% 14.9%",
  secondaryForeground: "0 0% 98%",
  
  // Muted colors
  muted: "0 0% 14.9%",
  mutedForeground: "0 0% 63.9%",
  
  // Accent colors
  accent: "0 0% 14.9%",
  accentForeground: "0 0% 98%",
  
  // Destructive colors
  destructive: "0 62.8% 30.6%",
  destructiveForeground: "0 0% 98%",
  
  // Success colors
  success: "120 100% 50%",
  successForeground: "0 0% 98%",
  
  // Border and input
  border: "0 0% 14.9%",
  input: "0 0% 14.9%",
  ring: "0 0% 83.1%",
  
  // Chart colors
  chart1: "220 70% 50%",
  chart2: "160 60% 45%",
  chart3: "30 80% 55%",
  chart4: "280 65% 60%",
  chart5: "340 75% 55%",
  
  // Sidebar colors
  sidebarBackground: "240 5.9% 10%",
  sidebarForeground: "240 4.8% 95.9%",
  sidebarPrimary: "224.3 76.3% 48%",
  sidebarPrimaryForeground: "0 0% 100%",
  sidebarAccent: "240 3.7% 15.9%",
  sidebarAccentForeground: "240 4.8% 95.9%",
  sidebarBorder: "240 3.7% 15.9%",
  sidebarRing: "217.2 91.2% 59.8%",
  
  // Skeleton loader
  skeleton: "0 0% 8%",
} as const

export type ColorToken = keyof typeof colors
