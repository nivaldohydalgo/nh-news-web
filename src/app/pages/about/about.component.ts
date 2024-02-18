import { Component, isDevMode } from '@angular/core';

import { environment_dev } from '../../../environments/environment.dev'
import { environment_pro } from '../../../environments/environment.pro'

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {
    public url_my_photo = ''

    ngOnInit(): void {
        if ( isDevMode() ) { 
            this.url_my_photo = environment_dev.imageRepo + 'my-photo.jpg'
        } else { 
            this.url_my_photo = environment_pro.imageRepo + 'my-photo.jpg'
        }
    }
}
