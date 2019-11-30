import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

let url = 'https://warm-gorge-76460.herokuapp.com/?fbclid=IwAR2xg5t158YiMcr1QsmVuBaR7FDJiuzwEM-66q0CdI-6JiuO8dFYsnQLOU0';

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

	addAddress(params){
		return new Promise((resolve, reject) => {
			this.http.post(url + '/address', params, {headers: this.headers})
			.subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
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

	getAllUsers(){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.get(`${url}/users/all`, { headers: this.headers})
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

	getAllCategory(){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.get(`${url}/category/all`, {headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		});
	}

	getCategoryHeader(){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.get(`${url}/category/categories`, {headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		});
	}

	createCategory(cat){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.post(`${url}/category/create`, cat, {headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		});
	}

	createSubcategory(sub){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.post(`${url}/category/subcreate`, sub, {headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		});
	}

	getAllSubCategories(){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.get(`${url}/category/allsubcategories`, {headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		});
	}

	getChildrens(name){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.get(`${url}/category/children/${name}`, {headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		});
	}

	getAllProducts(){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.get(`${url}/products/all`, {headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		});
	}

	createProduct(product) {
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.post(`${url}/products/add`, product, {headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		});
	}

	getProductsByType(type){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.get(`${url}/products/getByType/${type}`, {headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		});
	}

	getProductById(id){
		this.setHeaders();
		return new Promise((resolve, reject) => {
			this.http.get(`${url}/products/getById/${id}`, {headers: this.headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
		});
	}
}