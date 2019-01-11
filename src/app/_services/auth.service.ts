import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor() { }
	//new user
	createNewUser(email: string, password: string) {
		return new Promise((resolve, reject) => {
			firebase.auth().createUserWithEmailAndPassword(email, password).then(
				() => {
					resolve();
				},
				(error) => {
					reject(error);
				}
			);
		})
	}
	//connect user
	signInUser(email: string, password: string) {
		return new Promise(
			(resolve, reject) => {
				firebase.auth().signInWithEmailAndPassword(email, password).then(
					() => {
						resolve();
					},
					(error) => {
						reject(error);
					}
				);
			}
		);
	}
	//disconnect user
	signOutUser() {
		firebase.auth().signOut();
	}
}
