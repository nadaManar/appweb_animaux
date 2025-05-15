import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListAnimalsComponent } from './animal/list-animals/list-animals.component';
import { ShowAnimalComponent } from './animal/show-animal/show-animal.component';
import { EditAnimalComponent } from './animal/edit-animal/edit-animal.component';
import { AddAnimalComponent } from './animal/add-animal/add-animal.component';
import {ObservationListComponent} from './components/observation-list/observation-list.component';
import {ObservationDetailComponent} from './components/observation-detail/observation-detail.component';
import {ObservationFormComponent} from './components/observation-form/observation-form.component';
import {ObservationUpdateComponent} from './components/observation-update/observation-update.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
export const routes: Routes = [
    { path: 'about', component: AboutComponent },

    {path: "animals", component: ListAnimalsComponent},
    {path: "animal/:id", component: ShowAnimalComponent},
    {path: "animals/new", component: AddAnimalComponent},
    {path: "animal/:id/edit", component: EditAnimalComponent},

  {path: 'observations',component:ObservationListComponent},
  {path: 'observations/:id',component:ObservationDetailComponent},
  {path: 'creation-observations',component:ObservationFormComponent},
  {path: 'observation-update/:id', component:ObservationUpdateComponent},
  { path: 'login', component: LoginComponent },
  {path: '',redirectTo:'/about', pathMatch:'full'},
  {path: "register", component: RegisterComponent},
  ];





