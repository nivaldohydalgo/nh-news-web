import { Component, OnInit, isDevMode } from '@angular/core';

import { News } from '../../models/news.model';

import { NewsService } from '../../services/news.service';
import { NewComponent } from '../../components/new/new.component';

import { environment_dev } from '../../../environments/environment.dev';
import { environment_pro } from '../../../environments/environment.pro';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        NewComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    public news: News[] = []
    public repo = ''


    constructor( private newsService: NewsService ) { }

    ngOnInit(): void {
        this.getNews()
        if ( isDevMode() ) { 
            this.repo = environment_dev.imageRepo
        } else { 
            this.repo = environment_pro.imageRepo
        }
    }

    getNews(): void {
        this.newsService.getNews().subscribe(
            news_data => { 
                console.log("Está no GetNews()")
                console.log(news_data)
//                news_data[0].image = 'foto_teste_nh_news.jpg'
//                news_data[1].image = 'foto_teste_nh_news.jpg'
                // news_data[0].image = 'https://nh-news-images.s3.sa-east-1.amazonaws.com/foto_teste_nh_news_1.jpg'
                // news_data[0].image = 'https://nh-news-img.s3-website-sa-east-1.amazonaws.com/foto_teste_nh_news.jpg'
                for (var i = 0; i < news_data.length; i++) {
                    news_data[i].image = this.repo + news_data[i].image
                }
                console.log('imagem 0...: ', news_data[0].image)
                console.log('imagem 1...: ', news_data[1].image)
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
