
export default async function FooterComponent() {
const thisYear = new Date().getFullYear() 

    return (
        <div className="grid justify-center p-20">
            <p>info&#64;pwejar.com</p>
            <p>P.O Box 10-80108, Kilifi, Kenya.</p>
            <p>Pwejar Hub Limited ©{ thisYear }</p>
        </div>
        
    );
}