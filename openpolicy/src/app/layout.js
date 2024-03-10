import { Bricolage_Grotesque } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bric = Bricolage_Grotesque({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body className={bric.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
