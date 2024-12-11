import Image from "next/image";
import { Store } from "../app.interface";

export default async function StoreComponent(props: {store: Store}) {
    const {store} = props
    return (
        <div className="p-2">
            <div className="card w-full h-full  shadow-xl bg-base-100 grid items-center grid-cols-2 gap-2">
                <div className="">
                    <Image
                    src={store.logo? store.logo.small: '/mtaabizz_icon_monochrome.svg'}
                    alt="pwejar hub logo"
                    height={48}
                    width={42}
                    />
                </div>
                
                <p>{store.name} </p>
            </div>
        </div>
        
    );
}