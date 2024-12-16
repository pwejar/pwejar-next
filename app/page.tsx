/* eslint-disable react/jsx-key */
import Image from "next/image";
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from "./firebase/clientApp";
import { Store } from "./app.interface";
import StoreComponent from "./components/Store";
import FooterComponent from "./components/Footer";
import localFont from "next/font/local";


const chicleFont = localFont({
  src: "./fonts/Chicle-Regular.ttf",
  variable: "--font-geist-mono",
});

const gabaritoFont = localFont({
  src: "./fonts/Gabarito-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
});

let stores: Store[] | null = null

const fetchData = async () => {
  const collectionRef = collection(db,'stores')
  const collectionQuery = query(collectionRef, where('verified', '==', true))

  try {
    const querySnapshot = await getDocs(collectionQuery);
    stores = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as Store
    }));
    console.log(stores);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default async function Home() {
  await fetchData()
  return (
    <div className={`background p-2 md:p-4 ${gabaritoFont.className}`}>
      <div className="scrollContainer">
        <main className="w-full ">
          <div className="scrollContainer ">
            <div className="bg-light">
              <div className="grid grid-cols-2 items-center" >
                <Image
                  className="p-4 dark:invert"
                  src="/pwejar_logo_full_slogan.svg"
                  alt="pwejar hub logo"
                  width={380}
                  height={38}
                  priority
                />
                <div className="breadcrumbs text-sm p-2 hidden md:block ">
                  <ul>
                    <li>Home</li>
                    <li><a target="blank" href="https://mtaabizz.com/business">Businesses</a></li>
                    <li><a>Events & Tickets</a></li>
                    <li>Products</li>
                  </ul>
                </div>
              </div>
              <div className="p-16"></div>
              <div className="flex justify-around p-8">
                <div className=" images p-8 flex justify-center">
                  <Image
                      className="m-1 dark:invert"
                      src="/screen 2.jpg"
                      alt="Next.js logo"
                      width={115}
                      height={38}
                      priority
                    />
                  <Image
                      className="m-1 dark:invert"
                      src="/shot 1.jpg"
                      alt="Next.js logo"
                      width={115}
                      height={38}
                      priority
                    />
                  <Image
                      className="m-1 dark:invert"
                      src="/wscreen.jpeg"
                      alt="Next.js logo"
                      width={350}
                      height={85}
                      priority
                    />

                </div>
                <div className="p-6 self-end">
                  <div className="p-8">
                    <div className="w-full flex justify-center">
                      <Image
                        className=" dark:invert"
                        src="/mtaabizz icon.svg"
                        alt="mtaabizz logo"
                        width={70}
                        height={28}
                        priority
                      />
                    </div>
                    <Image
                      className=" dark:invert"
                      src="/mtaabizz name os logo.png"
                      alt="pwejar hub logo"
                      width={280}
                      height={28}
                      priority
                    />
                  </div>
                  {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">
                      Get started by editing{" "}
                      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                        app/page.tsx
                      </code>
                      .
                    </li>
                    <li>Save and see your changes instantly.</li>
                  </ol> */}
                  <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                      className="rounded-full border border-solid border-black/[1] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                      href="https://www.youtube.com/@pwejar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch tutorials
                    </a>
                    <a
                      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                      href="https://play.google.com/store/apps/details?id=com.pwejar.mtaabizz&pcampaignid=pwejar.com"
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
                  </div>
                </div>
              </div>
            </div>
            <main  className="bg-lightBackground  p-16 grid lg:grid-cols-2">
              <div className="p-2">
                <h3 className={`text-pwejar text-4xl ${chicleFont.className}` }>About us</h3>
                <p className={`text-justify ${gabaritoFont.className}`}>
                  Pwejar Hub Limited is a software development company. The company aims to help small-scale businesses in Africa grow by providing them with the necessary tools they need to survive in this digital age. It was founded in 2019. We are passionate about using their skills to benefit the community, and since then we have been researching and designing the best tool to fit Kenya&apos;s small-scale business. Instead of making them adapt complex tools, we have created tools that adapt to them by simplifying and customization.
                </p>
              </div>
              <div className="p-2">
                <h3 className={`text-pwejar text-4xl ${chicleFont.className}` }>Vision</h3>
                <p className={`pb-8 ${gabaritoFont.className}`}>
                  Digitizing businesses in Africa
                </p>
                <h3 className={`text-pwejar text-4xl ${chicleFont.className}` }>
                  Mission
                </h3>
                <p className={`pb-8 ${gabaritoFont.className}`}>
                  Unlocking potential in business by modernizing tools
                </p>
              </div>
            </main>
            <div className="bg-pwejar py-14">
              <div className="items-center justify-items-center">
                <h1 className={`p-8 text-4xl ${chicleFont.className} text-lightBackground`}>🚀 Businesses enjoying our services ☺️  </h1>
              </div>
              <div className="storeContainer grid ">
                {stores?.map((store, index) => {
                  return <StoreComponent key={index} store={store}/>
                })}
              </div>
            </div>
          </div>
        </main>
        <div>
          <h2>
            <b>Pwejar Tickets and Events</b>
          </h2>
          <div >
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-CfZ0xwZukA"  ></iframe>
          </div>
        </div>
        <FooterComponent/>
      </div>
    </div>
  );
}
