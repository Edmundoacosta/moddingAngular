import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

let url = 'http://localhost:4444'

@Injectable({
  providedIn: 'root'
})
export class ModdingService {
	headers:HttpHeaders;

	constructor(private http: HttpClient){}

	login(credentials){
	    return new Promise( (resolve, reject) => {
	      this.http.post(url + '/users/login', credentials)
	      .subscribe(res => {
	        resolve(res);
	      }, (err) => {
	        reject(err);
	      });
	    });
	}

	register(params){
		return new Promise((resolve, reject) => {
			this.http.post(url + '/users/register', params)
			.subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
			})
		})
	}
}