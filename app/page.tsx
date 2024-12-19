/* eslint-disable @next/next/no-img-element */
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
        <div className="w-full ">
          <div className="scrollContainer ">
            <div className="bg-light">
              <div className="grid sm:text-center md:grid-cols-2 items-center" >
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
              <div className="md:flex justify-center p-8">
                <div className=" images md:p-8 flex-wrap flex justify-center">
                  <img
                    className="m-1 max-w-96 dark:invert"
                    src="/mtaabizz bronchure.png"
                    alt="mtaabizz add mtaabiz"
                  />
                </div>
                <div className="md:p-6 self-end">
                  <div className="md:p-8">
                    <div className="w-full flex items-center justify-center md:grid">
                      <Image
                        className="md:mx-auto dark:invert"
                        src="/mtaabizz icon.svg"
                        alt="mtaabizz logo"
                        width={70}
                        height={28}
                        priority
                      />
                      <Image
                      className=" dark:invert"
                      src="/mtaabizz name os logo.png"
                      alt="pwejar hub logo"
                      width={280}
                      height={28}
                      priority
                    />
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center items-center flex-col sm:flex-row">
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
              <div className="p-2 ">
                <h3 className={`text-pwejar text-4xl ${chicleFont.className}` }>About us</h3>
                <p className={`text-justify ${gabaritoFont.className}`}>
                  Pwejar Hub Limited is a software development company. The company aims to help small-scale businesses in Africa grow by providing them with the necessary tools they need to survive in this digital age. We are passionate about using our skills to benefit the community. Founded in 2019, since then we have been researching and designing the best tool to fit Kenya&apos;s small-scale business. Instead of making them adapt complex tools, we have created tools that adapt to them by simplifying and customization.
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
              <div className="items-center justify-items-center">
                <a href="https://mtaabizz.com/businesses" target="blank" className={`p-8 ${chicleFont.className} text-lightBackground`}>See more... </a>
              </div>
            </div>
          </div>
        </div>
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
