import type { Metadata } from "next";
import "@/styles/globals.css";

import { cn } from '/@lib/utils'

export const metadata: Metadata = {
    title: "Suplycommerce", 
    description: "Site para venda de suplementos",
  }

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
      <html lang="PT-BR">
        <body className={cn}>{children}</body>
      </html>
    )
  };