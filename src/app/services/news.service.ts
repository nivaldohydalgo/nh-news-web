import { Injectable, isDevMode } from '@angular/core';

//import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { News } from '../models/news.model';
import { environment } from '../../environments/environment.development';
import { environment_dev } from '../../environments/environment.dev';
import { environment_pro } from '../../environments/environment.pro';

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
        console.log("no GetNews vai fazer o isDevMode")
        if ( isDevMode() ) {
            console.log('Development!');
            this.apiURL = environment_dev.apiURL;

        } else {
            console.log('Production!');
            this.apiURL = environment_pro.apiURL;
        }
        console.log('Dentro do getNews()')
//        if ( isDevMode() ) {
//            console.log("Entrou no if do isDevMode")
//            this.apiURL = '/api'
//        } else {
//            console.log("Entrou no else do isDevMode")
//            this.apiURL = 'https://nh-news-api-sx25chuica-uc.a.run.app'
//        }
        console.log('apiURL.......: ', this.apiURL)
        this.callURL = this.apiURL + this.endPoint
        console.log('callURL......: ', this.callURL)
        // return this.httpClient.get<News[]>(this.apiURL, { 'headers': headers } )
        return this.httpClient.get<News[]>(this.callURL )
    }

}

