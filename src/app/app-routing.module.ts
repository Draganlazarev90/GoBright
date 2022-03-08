import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
      path: 'example',
      component: ExampleComponent
    },
    {
      path: 'search',
      component: SearchComponent
    },
    {
      path: '',
      redirectTo: 'search',
      pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
