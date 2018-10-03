
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';



@Injectable()
export class DataService {

	constructor(private http: Http, private apiUrl: string) { }

	getAll() {
		return this.http.get(this.apiUrl);
	}

	create(data) {
		return this.http.post(this.apiUrl, JSON.stringify(data));
	}

	delete(data) {
		return this.http.delete(this.apiUrl + '/' + data.id);
	}
}
