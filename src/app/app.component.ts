import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SearchPageComponent, LoginPageComponent ]
})
export class AppComponent {

}
