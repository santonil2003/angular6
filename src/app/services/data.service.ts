import { AppError } from './../common/app-error';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, retry } from 'rxjs/operators';




@Injectable()
export class DataService {

	constructor(private http: Http, private apiUrl: string) { }

	getAll() {
		return this.http.get(this.apiUrl).pipe(map(response => response.json()));
	}

	get(data) {
		return this.http.get(this.apiUrl + '/' + data.id).pipe(map(response => response.json()));
	}

	create(data) {
		return this.http.post(this.apiUrl, JSON.stringify(data)).pipe(map(response => response.json()));
	}

	delete(data) {
		return this.http.delete(this.apiUrl + '/' + data.id).pipe(map(response => response.json())).pipe(retry(4));
		//return this.http.delete(this.apiUrl + '/' + data.id).pipe(map(response => response.json())).toPromise();
	}
}
