import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="background p-4">
        <div className="scrollContainer ">
          <div className="top p" >
            <Image
              className="p-4 dark:invert"
              src="/pwejar_logo_full_slogan.svg"
              alt="pwejar hub logo"
              width={380}
              height={38}
              priority
            />
            <div className="breadcrumbs text-sm p-2">
              <ul>
                <li><a>Home</a></li>
                <li><a>Documents</a></li>
                <li>Add Document</li>
              </ul>
            </div>
          </div>
          <div className="top">
            <div className="images p-8 flex ">
              <Image
                  className="m-1 dark:invert"
                  src="/screen 2.jpg"
                  alt="Next.js logo"
                  width={90}
                  height={38}
                  priority
                />
              <Image
                  className="m-1 dark:invert"
                  src="/screen 7.jpg"
                  alt="Next.js logo"
                  width={90}
                  height={38}
                  priority
                />
              <Image
                  className="m-1 dark:invert"
                  src="/shot 1.jpg"
                  alt="Next.js logo"
                  width={90}
                  height={38}
                  priority
                />
              <Image
                  className="m-1 dark:invert"
                  src="/wscreen.jpeg"
                  alt="Next.js logo"
                  width={250}
                  height={38}
                  priority
                />

            </div>
              <div className="p-6">
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                  <li className="mb-2">
                    Get started by editing{" "}
                    <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                      app/page.tsx
                    </code>
                    .
                  </li>
                  <li>Save and see your changes instantly.</li>
                </ol>
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                  <a
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert"
                      src="/vercel.svg"
                      alt="Vercel logomark"
                      width={20}
                      height={20}
                    />
                    Download Now
                  </a>
                  <a
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch tutorials
                  </a>
                </div>
              </div>
            
          </div>
          <div className="top items-center justify-items-center ">
            <h1 className="">Boost your business with Mtaabizz POS</h1>
          </div>
        </div>
      </main>
     
    </div>
  );
}
