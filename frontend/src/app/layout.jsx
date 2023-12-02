import "../styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import { NotificationContextProvider } from "@/store/notification/Notification-context";
import Notifications from "@/components/notification/Notifications";

export const metadata = {
  title: "Digit Recognizer",
  description: "Digit Recognizer",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotificationContextProvider>
          <Notifications />
          <Header />
          {children}
        </NotificationContextProvider>
      </body>
    </html>
  );
}
