import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { News } from '../models/news.model';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
   // private apiURL = 'http://localhost:3000/news'
   // private apiURL = 'https://nh-news-api-sx25chuica-uc.a.run.app'
    private apiURL = '/api'
    public news: News[] = []

    constructor(
        private httpClient: HttpClient
    ) { }

    public getNews(): Observable<News[]> {
        return this.httpClient.get<News[]>(this.apiURL)
    }

}

