import { SpaceModule } from './space/space.module';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'intel', loadChildren: 'src/app/intel/intel.module#IntelModule'},
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SpaceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
