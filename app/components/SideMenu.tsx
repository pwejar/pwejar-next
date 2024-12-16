/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';

import { useRef } from "react";

export default function SideMenu() {
    let menuOn: boolean = false
    const menuRef  = useRef<HTMLDivElement>(null); // Create a ref to store the clicked element
    const line = useRef<SVGPathElement>(null)
    const lineOne = useRef<SVGPathElement>(null)
    const lineTwo = useRef<SVGPathElement>(null)
    const checked = () => {
        menuOn? menuOn = false: menuOn = true
        menuRef.current?.classList?.toggle('menuOff');  // Toggle the 'hidden' class
        line.current?.classList?.toggle('line');
        line.current?.classList?.toggle('lineOn');
        lineOne.current?.classList?.toggle('lineOne');
        lineOne.current?.classList?.toggle('lineOneOn');
        lineTwo.current?.classList?.toggle('lineTwo');
        lineTwo.current?.classList?.toggle('lineTwoOn');
        const children = menuRef.current?.children
        if(!children) return
        for (let i = 0; i < children?.length; i++) {
            children[i].classList?.toggle('on')
            children[i].classList?.toggle('off')
        }
       
    };
    return (
        <div>
            <div onClick={() => checked()} className=" dots md:hidden">
                <svg width="30" height="30" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={line} className="line" d="M8.1447 2.5341H1.8033C1.34248 2.5341 0.968903 2.81992 0.968903 3.1725C0.968903 3.52508 1.34248 3.8109 1.8033 3.8109H8.1447C8.60553 3.8109 8.9791 3.52508 8.9791 3.1725C8.9791 2.81992 8.60553 2.5341 8.1447 2.5341Z" />
                    <path ref={lineOne} className="lineOne" d="M8.1447 4.6133H1.8033C1.34248 4.6133 0.968903 4.89912 0.968903 5.2517C0.968903 5.60428 1.34248 5.8901 1.8033 5.8901H8.1447C8.60553 5.8901 8.9791 5.60428 8.9791 5.2517C8.9791 4.89912 8.60553 4.6133 8.1447 4.6133Z"  />
                    <path ref={lineTwo} className="lineTwo" d="M8.1447 6.6924H1.8033C1.34248 6.6924 0.968903 6.97822 0.968903 7.3308C0.968903 7.68338 1.34248 7.9692 1.8033 7.9692H8.1447C8.60553 7.9692 8.9791 7.68338 8.9791 7.3308C8.9791 6.97822 8.60553 6.6924 8.1447 6.6924Z" />
                </svg>
            </div>
            <div ref={menuRef} className="meSlide menuOff  md:hidden">
                <p className={`transition delay-50 duration-300 ease-in-out ${menuOn?'on':'off'}`}>Home</p>
                <p className={`transition delay-100 duration-300 ease-in-out ${menuOn?'on':'off'}`}>Businesses</p>
                <p className={`transition delay-150 duration-300 ease-in-out ${menuOn?'on':'off'}`}>Events & Tickets </p>
                <p className={`transition delay-200 duration-300 ease-in-out ${menuOn?'on':'off'}`}>Products</p>
                <p className={`transition delay-250 duration-300 ease-in-out ${menuOn?'on':'off'}`}>Login</p>
            </div>
        </div>
    )
}
