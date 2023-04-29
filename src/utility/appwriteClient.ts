import { Account, Appwrite, Storage } from "@refinedev/appwrite";
import { API_PROJECT_ID, API_URL } from "config/constants";

const APPWRITE_URL = API_URL;
const APPWRITE_PROJECT = API_PROJECT_ID;

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);
const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { account, appwriteClient, storage };
