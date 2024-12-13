import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ImagesComponent } from './images/images.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { AllComponent } from './all/all.component';

export const routes: Routes = [

    { path: '', component: AppComponent },  // Default route, if needed
  { path: 'child', component: ChildComponent },
  {
    path:'image',
    title:'image component',
    component:ImagesComponent,

},
   {
    path:'news',
title:'news component',
component:NewsComponent,
},
{
  path:'videos',
title:'videos component',
component:VideosComponent,
},
{
  path:'all',
title:'all component',
component:AllComponent,
},
];
