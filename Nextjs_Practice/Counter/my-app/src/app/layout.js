
import Providers from "@/redux/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers> {/* ✅ Use Redux inside a Client Component */}
      </body>
    </html>
  );
}

