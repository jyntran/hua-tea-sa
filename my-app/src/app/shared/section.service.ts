import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SectionService {
	constructor (
		private http: Http
	) {}

	sectionsURL = 'http://portfolio.huateasa.ca/wp-json/wp/v2/sections'

	getSections() {
		return this.http.get(this.sectionsURL)
		.map((res: Response) => res.json());
	}
}
