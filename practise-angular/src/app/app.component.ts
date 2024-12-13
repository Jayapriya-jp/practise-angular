import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { AllComponent } from './all/all.component';
import { ImagesComponent } from './images/images.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChildComponent,AllComponent,ImagesComponent,NewsComponent,VideosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practise-angular';
}
