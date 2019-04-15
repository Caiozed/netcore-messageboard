import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LoginService {
    public loggedIn = false;
    Router: Router;
    private IsLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(this.loggedIn);

    constructor(Router: Router) { Router = Router; }

    LogIn(id: string) {
        this.loggedIn = true;
        sessionStorage.setItem("id", id);
        this.IsLoggedIn.next(this.loggedIn);
    }

    LogOff() {
        this.loggedIn = false;
        sessionStorage.removeItem("id");
        this.IsLoggedIn.next(this.loggedIn);
    }


    IsLogged(): Observable<any> {
        return this.IsLoggedIn.asObservable();
    }
}
