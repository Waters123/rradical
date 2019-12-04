import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './contact/content/content.component';
import { FormComponent } from './contact/form/form.component';
import { FooterComponent } from './contact/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './contact/footer/privacy-policy/privacy-policy.component';






const appRoutes: Routes = [
 { path: 'contact', component: ContactComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContentComponent,
    FormComponent,
    FooterComponent,
    PrivacyPolicyComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
