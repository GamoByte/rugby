import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsrContainerComponent } from './container.component';
import { ListUsersComponent } from './list/listusers.component';
import { AddEditComponent } from './addedit/addedit.component';

const routes: Routes = [
    {
        path: '', component: UsrContainerComponent,
        children: [
            { path: '', component: ListUsersComponent },
            { path: 'add', component: AddEditComponent },
            { path: 'edit/:id', component: AddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }