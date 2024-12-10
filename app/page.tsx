/* eslint-disable react/jsx-key */
import Image from "next/image";
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from "./firebase/clientApp";
import { Store } from "./app.interface";
import StoreComponent from "./components/Store";
import FooterComponent from "./components/Footer";
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
    <div className="">
      <main className="">
        <div className="scrollContainer ">
          <div className="top grid grid-cols-2 items-center" >
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
                <li><a>About</a></li>
                <li><a>Businesses</a></li>
                <li><a>Events & Tickets</a></li>
                <li>Products</li>
              </ul>
            </div>
          </div>
          <div className="top p-16"></div>
          <div className="top flex justify-center">
            <div className=" images p-8 flex justify-center">
              <Image
                  className="m-1 dark:invert"
                  src="/screen 2.jpg"
                  alt="Next.js logo"
                  width={85}
                  height={38}
                  priority
                />
              <Image
                  className="m-1 dark:invert"
                  src="/screen 7.jpg"
                  alt="Next.js logo"
                  width={85}
                  height={38}
                  priority
                />
              <Image
                  className="m-1 dark:invert"
                  src="/shot 1.jpg"
                  alt="Next.js logo"
                  width={85}
                  height={38}
                  priority
                />
              <Image
                  className="m-1 dark:invert"
                  src="/wscreen.jpeg"
                  alt="Next.js logo"
                  width={250}
                  height={85}
                  priority
                />

            </div>
            <div className="p-6 self-end">
              <div className="grid justify-center">
                <Image
                  className=" dark:invert"
                  src="/mtaabizz icon.svg"
                  alt="mtaabizz logo"
                  width={90}
                  height={38}
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
          <main  className="pwejar-bg p-8">
              <h3>About us</h3>
              <p className="">
                Pwejar Hub Limited is a software development company. The company aims to help small-scale businesses in Africa grow by providing them with the necessary tools they need to survive in this digital age. It was founded in 2019. We are passionate about using their skills to benefit the community, and since then we have been researching and designing the best tool to fit Kenya&apos;s small-scale business. Instead of making them adapt complex tools, we have created tools that adapt to them by simplifying and customization.
              </p>
              <h3>Vision</h3>
              <p>
                Digitizing businesses in Africa
              </p>
              <h3>
                Mission
              </h3>
              <p>
                Unlocking potential in business by modernizing tools
              </p>
          </main>
          <div className=" items-center justify-items-center bg-slate-400">
            <h1 className="p-8">🚀 Businesses enjoying our services ☺️  </h1>
          </div>
          <div className="storeContainer grid bg-slate-400">
            {stores?.map((store, index) => {
              return <StoreComponent key={index} store={store}/>
            })}
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
  );
}
