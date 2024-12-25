import { Client, Account, ID } from "appwrite";
import conf from "../../conf/conf"

export class AuthService{
    client = new Client();
    account;
     
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                // Automatically log in the user after account creation
                try {
                    return await this.login({ email, password });
                } catch (loginError) {
                    console.error("Login failed after account creation:", loginError);
                    throw new Error("Account created, but login failed. Please log in manually.");
                }
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.error("Appwrite service :: login :: error", error);
            throw new Error("Login failed. Please check your credentials.");            }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error);
            throw new Error("Failed to fetch current user.");            
        }
    }

    async logOut(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite service :: logOut :: error", error);
            throw new Error("Failed to log out. Please try again.");        }
    }
}

const authServices = new AuthService();

export default authServices;