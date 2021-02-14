import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UnauthorizedComponent } from "./home/unauthorized/unauthorized.component";
import { TestComponent } from "./home/test/test.component";
import { HomeComponent } from "./home/home.component";
import { LetsGetStartedComponent } from "./home/lets-get-started/lets-get-started.component";
import { EmployeeRegisteredComponent } from "./home/employee-registered/employee-registered.component";
import { RegisterNewEmployeeComponent } from "./home/register-new-employee/register-new-employee.component";
import { AuthorizeGuard } from "../api-authorization/authorize.guard";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        pathMatch: "full"
    },
    {
        path: "lets-get-started",
        component: LetsGetStartedComponent
    },
    {
        path: "employee-registered",
        component: EmployeeRegisteredComponent
    },
    {
        path: "register-new-employee",
        component: RegisterNewEmployeeComponent,
        canActivate: [AuthorizeGuard]
    },
    {
        path: "unauthorized",
        component: UnauthorizedComponent
    },
    {
        path: "test",
        component: TestComponent
    }
];

@NgModule({
    // useHash supports github.io demo page, remove in your app
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}