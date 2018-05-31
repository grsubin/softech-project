import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { PageNotFoundComponent } from 'src/app/not-found.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent,
  },
  {
    path:'products', loadChildren: '/app/modules/products/products.module#ProductsModule'
  },
  {
    path:'check-out', loadChildren: 'app/modules/check-out/check-out.module#CheckOutModule'
  },
  {
    path:'admin', loadChildren: 'app/modules/admin/admin.module#AdminModule'
  },
  {
    path:'', redirectTo: '/home', pathMatch:'full'
  },
  {
    path:'**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
