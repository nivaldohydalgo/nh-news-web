import { Component, OnInit } from '@angular/core';

import { News } from '../../models/news.model';

import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    public news: News[] = []

    constructor( private newsService: NewsService ) { }

    ngOnInit(): void {
        this.getNews()
    }

    getNews(): void {
        this.newsService.getNews().subscribe(
            news_data => { 
                console.log("Está no GetNews()")
                console.log(news_data)
                this.news = news_data 
            }
            
        );
    }

}
