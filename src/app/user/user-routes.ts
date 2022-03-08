import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile-component";
import { RegisterComponent } from "./register/register/register.component";

export const userRoutes = [

    { path: 'register', component: RegisterComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'login', component: LoginComponent},

]
