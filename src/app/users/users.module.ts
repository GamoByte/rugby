import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsrContainerComponent } from './container.component';
import { ListUsersComponent } from './list/listusers.component';
import { AddEditComponent } from './addedit/addedit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: [
        UsrContainerComponent,
        ListUsersComponent,
        AddEditComponent
    ]
})
export class UsersModule { }