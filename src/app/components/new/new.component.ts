import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';



import { News } from '../../models/news.model'

@Component({
    selector: 'app-new',
    standalone: true,
    imports: [
        MatIconModule
    ],
    templateUrl: './new.component.html',
    styleUrl: './new.component.css'
})
export class NewComponent {

    @Input({ required: true }) new!: News
    

}
