import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  public lists = [
    { "name": "Johnson", "age": 22, "place": "Iringa" },
    { "name": "Hadija", "age": 44, "place": "Tanga" },
    { "name": "Alpha", "age": 32, "place": "Kigoma" }
  ];


  constructor() { }
getLists(): Observable<any[]> {
  return of(this.lists);
}
 
}
