import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase';
//Services
import { AuthService } from './_services/auth.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { BooksService } from './_services/books.service';
//Modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Routing
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
// Component
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './bookList/single-book/single-book.component';
import { BookFormComponent } from './bookList/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
	{ path: 'auth/signup', component: SignupComponent },
	{ path: 'auth/signin', component: SigninComponent },
	{ path: 'books', component: BookListComponent },
	{ path: 'books/new', component: BookFormComponent },
	{ path: 'books/view/:id', component: SingleBookComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		SigninComponent,
		BookListComponent,
		SingleBookComponent,
		BookFormComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		AuthService,
		BooksService,
		AuthGuardService
	],
	bootstrap: [AppComponent]
})
export class AppModule {

	constructor() {
		const config = {
			apiKey: "AIzaSyB4vRy9K6IS_pdXuHvo-BZaN_WtXqLgVBk",
			authDomain: "bookangular-ad883.firebaseapp.com",
			databaseURL: "https://bookangular-ad883.firebaseio.com",
			projectId: "bookangular-ad883",
			storageBucket: "",
			messagingSenderId: "470953409162"
		};
		firebase.initializeApp(config);
	}
}
