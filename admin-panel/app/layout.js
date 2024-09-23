// src/app/layout.js
import Sidebar from "./_component/Sidebar";
import Navbar from "./_component/Navbar";
import './globals.css';

export const metadata = {
  title: "Admin Panel",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="p-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
