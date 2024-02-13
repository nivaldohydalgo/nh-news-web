import { Injectable } from '@angular/core';

//import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { News } from '../models/news.model';
import { environment } from '../../environments/environment.development';

//const httpOptions = {
//    headers: new HttpHeaders({ 
//        'Content-Type':  'application/json',
//        'Access-Control-Allow-Origin':'*'
//      'Authorization':'authkey',
//      'userid':'1'
//    })
//};

//const headers = new HttpHeaders()
//  .set('content-type', 'application/json')
//  .set('Access-Control-Allow-Origin', '*');

@Injectable({
    providedIn: 'root'
})
export class NewsService {
//    public apiURL = '/api'
    //private apiURL = 'http://localhost:3000/news'
    private apiURL = environment.apiURL
    private endPoint = 'news'
    private callURL = this.apiURL + this.endPoint
   // private apiURL = 'https://nh-news-api-sx25chuica-uc.a.run.app'
    public news: News[] = []

//    public httpHeaders = new HttpHeaders()
//        .set('Access-Control-Allow-Origin', '*')

    constructor(
        private httpClient: HttpClient
    ) { }

    public getNews(): Observable<News[]> {
        console.log('Dentro do getNews()')
//        if ( isDevMode() ) {
//            console.log("Entrou no if do isDevMode")
//            this.apiURL = '/api'
//        } else {
//            console.log("Entrou no else do isDevMode")
//            this.apiURL = 'https://nh-news-api-sx25chuica-uc.a.run.app'
//        }
        console.log('apiURL: ', this.callURL)
        // return this.httpClient.get<News[]>(this.apiURL, { 'headers': headers } )
        return this.httpClient.get<News[]>(this.callURL )
    }

}

