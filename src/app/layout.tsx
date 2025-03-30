import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TanStackProvider from "@/providers/TanstackProvider";

export const metadata: Metadata = {
  title: "Al Quran (Tafsir & By Word)",
  description: "Al Quran (Tafsir & By Word)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} >
        <TanStackProvider>
          {children}
        </TanStackProvider>

        <Toaster />
      </body>
    </html>
  );
}


{/* <div className='fixed h-[90vh]'>
                    <div className="h-full w-48 rounded-md shadow-sm overflow-y-auto">
                        <div className="flex flex-col gap-y-2 px-4 py-8">
                            {
                                surahLists?.map((surahList: surahType) => (
                                    (
                                        <Button
                                            key={surahList?.surahName}
                                            variant={"ghost"}
                                            className={`text-sm w-full cursor-pointer ${surahList?.surahName !== surah?.surahName && 'opacity-50 hover:opacity-100'}`}
                                            onClick={() => {
                                                window.location.href = `/${surahList?.surahNo}`
                                            }}
                                        >
                                            {surahList.surahName}
                                        </Button>
                                    )
                                ))
                            }
                        </div>
                    </div>
                </div> */}