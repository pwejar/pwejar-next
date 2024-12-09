/* eslint-disable @typescript-eslint/no-explicit-any */
// user.interface.ts
export interface User {
   
    email: string;
    password: string;
    accessToken: string;
    auth: any;
    /**
     * User's full name
     */
    displayName: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    metadata:{
        createdAt: string; 
        lastLoginAt: string;
        lastSignInTime: string;
        creationTime: string;
    }
    phoneNumber: string;
    photoURL: string;
     /**
     * Unique identifier for the user
     */
    uid: string;
}

export interface AdminsDetails{
    creator: any
    details: {
        photoURL: string; 
        role: string; 
        email: string;
        displayName: string; 
        pin: string;
        phone: string;
        owner: boolean;
    }
    id: number
    owner: boolean
    roles: {
        addStock: boolean
        countStock: boolean
        manageAdmins: boolean
        manageItems: boolean
        readReports: boolean
        sale: boolean
        supervisor: boolean
    }
    
}
export interface Plan {
    billingPeriod: string
    color: string
    details: Array<string>
    monthlyCost: number
    name: string
    value: number
    yearlyCost: number
}
export interface StoreAdmin {
    accounts: Array<any>
    admins: Array<string>
    adminsDetails: Array<AdminsDetails>
    allowCash: boolean
    allowCredit: boolean
    expenseCategories: Array<string>
    id: string
    kra:string 
    name: string
    planDetails: {
        created: number
        expiring: number
        plan: Plan
        stkCallback: any
        lastReminder: number
    }
    lastDataCleaned: number
    planExpired: boolean

}
export interface Folder{
    name: string
    subFolders: Array<Folder>
}
export interface Store {
    contacts: { 
        website: string | null 
        email: string | null 
        phone: string | null
    }
    folders : Array<Folder>
    logo: {
        small: string
        big: string
    }
    name: string
    planValue: number
    userName: string
    color: "pwejar" | "pwejar-love" | "pwejar-gold"
}
export interface StoreAllData extends Store , StoreAdmin {

}
export interface InputFix {
    value: string | number | null
    eye?: boolean
    eyeActive?: boolean
}