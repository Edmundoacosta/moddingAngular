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

	setHeaders(){
		this.headers = new HttpHeaders({
	      'Content-Type': 'application/json',
	      'Authorization': 'Token ' + localStorage.getItem('token')
	    });
	}

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

	getUser(){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.get(`${url}/users/user`, { headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		})
	}

	updateUser(user){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.put(`${url}/users/user`, user, { headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		})
	}
}