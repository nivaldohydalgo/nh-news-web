import { Component, OnInit, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopHeaderComponent } from './pages/top-header/top-header.component'
import { HeaderComponent } from './pages/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        TopHeaderComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'nh-news-web';

    ngOnInit() {
        if ( isDevMode() ) {
            console.log('****** Development! ******');
        } else {
            console.log('****** Production! ******');
        }
    }

}
