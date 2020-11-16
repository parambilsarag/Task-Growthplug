import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AwardComponent } from './award/award.component';
import { BlogComponent } from './blog/blog.component';
import { PracticeComponent } from './practice/practice.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {OwlModule} from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    InsuranceComponent,
    AwardComponent,
    BlogComponent,
    PracticeComponent,
    SectionTwoComponent,
    ServiceComponent,
    FooterComponent,
    BannerComponent,
    HeaderComponent,
    AppoinmentComponent,
    SuccessModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OwlModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
