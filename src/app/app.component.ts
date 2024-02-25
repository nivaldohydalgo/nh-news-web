import { Component, OnInit, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
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
