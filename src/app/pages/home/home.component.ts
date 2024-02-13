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
                console.log('typeof id...........: ', typeof news_data[0].id)
                console.log('typeof category.....: ', typeof news_data[0].category)
                console.log('typeof title........: ', typeof news_data[0].title)
                console.log('typeof content......: ', typeof news_data[0].content)
                console.log('typeof date.........: ', typeof news_data[0].date)
                console.log('typeof is_active....: ', typeof news_data[0].is_active)
                console.log('typeof ts_include...: ', typeof news_data[0].ts_include)
                console.log('typeof date.........: ', typeof this.news[0].date)
                console.log('typeof ts_include...: ', typeof this.news[0].ts_include)
            }
            
        );
    }

}