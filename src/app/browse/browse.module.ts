import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import { BrowseRoutingModule } from '../browse/browse-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ImageDetailComponent } from './image-detail.component';
// import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [BrowseComponent, ImageDetailComponent,
    //  SettingsComponent
    ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BrowseModule { }
