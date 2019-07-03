import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

let url = 'https://locahost:4444'

@Injectable({
  providedIn: 'root'
})
export class ModdingService {
	headers:HttpHeaders;

	constructor(private http: HttpClient){}

	login(user){
		return new Promise((resolve,reject) => {
			this.http.post(url + '/users/login', user)
			.subscribe( res => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
	}
}