import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { LibroComponent } from './pages/libro/libro.component';

export const routes: Routes = [
    {path: 'list', component: ListComponent},
    {path: 'list/:id', component: LibroComponent},
    {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule { }
