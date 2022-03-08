import { Injectable } from "@angular/core";
import { IRegister } from "./register.model";

@Injectable()
export class RegisterService {
    newUser!: IRegister;
    registerUser(userName: string, password: string, city: string, postalCode: string, address: string) {
        this.newUser = {
            userName: userName,
            password: password,
            city: city,
            postalCode: postalCode,
            address: address
        }
    }
    isAuthenticated() {
        return !!this.newUser;
    }
}
