"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "sonner";

// Toasts follow the current light/dark theme
function ThemedToaster() {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster position="bottom-right" theme={resolvedTheme === "light" ? "light" : "dark"} />
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
      <ThemedToaster />
    </ThemeProvider>
  );
}
