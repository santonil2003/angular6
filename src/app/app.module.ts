import { PostService } from './services/post.service';
import { CoursesService } from './services/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './summary.pipe';
import { RatingComponent } from './rating/rating.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { HttpModule } from '@angular/http';
import { AppErrorHandler } from './common/app-error-handler';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostDetailComponent } from './post-detail/post-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    RatingComponent,
    PanelComponent,
    LikeComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactFormComponent,
    ReactiveFormComponent,
    LoginComponent,
    SignupFormComponent,
    NewCourseFormComponentComponent,
    PostComponentComponent,
    HomeComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavBarComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'followers/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostComponentComponent },
      { path: 'post/:id/:title', component: PostDetailComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    {
      provide: ErrorHandler, useClass: AppErrorHandler // tell angular to use AppErrorHandler instead of ErrorHandler through out the application
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
