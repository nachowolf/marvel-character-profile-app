import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule, MatNativeDateModule } from '@angular/material';


import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { MarvelCharacterProfileComponent } from './marvel-character-profile/marvel-character-profile.component';
import { MarvelApiComponent } from './api/marvel-api/marvel-api.component';


const routes: Routes = [
  {path: 'marvel-character-profile', component: MarvelCharacterProfileComponent},
  {path: 'marvel-character-profile/api', component: MarvelApiComponent},
  {path: '**', redirectTo: 'marvel-character-profile', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MarvelCharacterProfileComponent,
    MarvelApiComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    DragDropModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
