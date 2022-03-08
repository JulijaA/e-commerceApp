import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser!: IUser;
    loginUser(userName: string, password: string) {
        this.currentUser = {
            userName: userName,
            password: password,
        }
    }
    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(userName: string, password: string) {
         this.currentUser.userName = userName;
        this.currentUser.password = password;
    }
}
