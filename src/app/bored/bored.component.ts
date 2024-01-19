import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Bored } from './bored.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-bored',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './bored.component.html',
  styleUrl: './bored.component.scss',
})
export class BoredComponent implements OnInit {
  private http: HttpClient = inject(HttpClient);
  boredResult: Bored = {} as Bored;
  error:Error = {} as Error;


  ngOnInit(): void {
    console.log('inside bored');
    this.load();
    
  }

  load(): void {
    this.http.get<Bored>('https://www.boredapi.com/api/activity').subscribe({
      next: (bored: Bored) => {
        console.log('bored:', bored);
        this.boredResult = bored;
      },
      error: (err: Error) => {
        console.error('Error: ', err)
        this.error = err;
      },
    });
  }
}
