import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"], // subset 기능을 사용하면 영어(라틴문자)만 가져오기 때문에 용량 아낄 수 있음
}); // next/font/google의 Nunito()는 object를 리턴함.
// 이 object의 property 중 className은 string이며, 폰트를 적용할 css class를 가지고 있음.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
