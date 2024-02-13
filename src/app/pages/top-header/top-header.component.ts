import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-top-header',
    standalone: true,
    imports: [
        MatIconModule
    ],
    templateUrl: './top-header.component.html',
    styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
    
}
