// components/providers/ClientHelmetProvider.tsx
"use client";
import { HelmetProvider } from "react-helmet-async";

export default function ClientHelmetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
