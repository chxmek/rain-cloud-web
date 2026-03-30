import type { Metadata } from "next";
import { Noto_Sans_Thai, Prompt } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RainCloud — Digital Products ที่สร้างความเชื่อมั่น",
  description:
    "RainCloud ออกแบบและพัฒนาระบบดิจิทัล เว็บแอปพลิเคชัน และเว็บไซต์ระดับพรีเมียม สำหรับธุรกิจที่ต้องการคุณภาพจริง",
  keywords: [
    "web development",
    "UX UI design",
    "custom software",
    "web application",
    "digital product",
    "Thailand",
  ],
  openGraph: {
    title: "RainCloud — Digital Products ที่สร้างความเชื่อมั่น",
    description:
      "เราช่วยธุรกิจเปลี่ยนไอเดียและความซับซ้อน ให้กลายเป็นผลิตภัณฑ์ดิจิทัลที่ชัดเจนและมีคุณภาพ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${notoSansThai.variable} ${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
