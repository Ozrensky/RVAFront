import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Racun } from '../models/racun';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacunServisService {

  private readonly API_URL = 'http://localhost:8083/Racun/';

  dataChange: BehaviorSubject<Racun[]> = new BehaviorSubject<Racun[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllRacun(): Observable<Racun[]> {
      this.httpClient.get<Racun[]>(this.API_URL).subscribe(data => {
          this.dataChange.next(data);
      },
          (error: HttpErrorResponse) => {
              console.log(error.name + ' ' + error.message);
          });
      return this.dataChange.asObservable();
  }

  public addRacun(Racun: Racun): void {
      this.httpClient.post(this.API_URL, Racun).subscribe();
  }

  public updateRacun(Racun: Racun): void {
      this.httpClient.put(this.API_URL, Racun).subscribe();
  }

  public deleteRacun(id: number): void {
      this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
