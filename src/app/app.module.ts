import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PoductModule } from './products/poduct.module';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
   
    HttpClientModule,
    RouterModule.forRoot([
                          {path:'',redirectTo:'welcome',pathMatch:'full'},
                          {path:'welcome',component:WelcomeComponent},
                          {path:'**',redirectTo:'welcome',pathMatch:'full'}
  ]),
    PoductModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
