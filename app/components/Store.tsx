
export default async function StoreComponent({ store }) {
    return (
        <div className="card bg-base-100  shadow-xl">
            
            <p>Name: {store.name} </p>
        </div>
    );
}