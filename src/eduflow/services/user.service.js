import {User} from "../model/user.js";


export class UserService {
    constructor(){
        this.users =[];
        this.apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
        this.userEndPoint = `${this.apiBaseUrl}${import.meta.env.VITE_USERS_ENDPOINT_PATH}`;
    }

    // Method for registering a new user
    async signUp(email, password, type, name, additionalInfo = {}) {
        const response = await fetch(`${this.userEndPoint}`);
        const users = await response.json();

        const id = users.length + 1;
        const user = new User(id, email, password, type, name, additionalInfo);

        await fetch(`${this.userEndPoint}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        });
        return user;
    }
    // Method for logging in a user
    async signIn(email, password){
        const response = await fetch(`${this.userEndPoint}`);
        const users = await response.json();

        const user = users.find(u => u.email === email && u.password === password);
        if(!user) throw new Error('The credentials are not valid');

        return user;
    }
    // Get all users
    async getAllUsers(){
        const response = await fetch(`${this.userEndPoint}`);
        return await response.json();
    }

    // Get user by id
    async getUserById(id){
        const response = await fetch(`${this.userEndPoint}/${id}`);
        return await response.json();
    }

    // Method for delete a user
    async deleteUser(id){
        await fetch(`${this.userEndPoint}/${id}`,{
            method: 'DELETE'
        });
    }
}

















