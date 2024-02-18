import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-top-header',
    standalone: true,
    imports: [
        RouterLink,
        MatIconModule
    ],
    templateUrl: './top-header.component.html',
    styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
    
}
