import Image from "next/image";
import { Store } from "../app.interface";

export default async function StoreComponent(props: {store: Store}) {
    const {store} = props
    return (
        <div className="p-2">
            <div className="rounded h-full bg-light flex items-center p-1">
                <Image
                    src={store.logo? store.logo.small: '/mtaabizz_icon_monochrome.svg'}
                    alt="pwejar hub logo"
                    height={48}
                    width={42}
                    />
                <div className="p-1 justify-items-center m-auto">
                    <strong>{store.name}</strong>
                    {/* <span>Type: </span> */}
                </div>
            </div>
        </div>
    );
}