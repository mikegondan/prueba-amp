import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../../amplify/data/resource'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'prueba-amp';
  client;
  posts: any[] = [];

  constructor() {
    this.client = generateClient<Schema>();
  }
  ngOnInit() {
    this.client.models.Post.list().then((data) => {
      this.posts = data.data;
    });
  }
}
