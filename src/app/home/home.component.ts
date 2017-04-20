import { Component, OnInit } from '@angular/core';
import { OAuth, DataService} from 'forcejs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public clientId = '3MVG9ZL0ppGP5UrD_6s2uriohOv_k1QVHmVj7opvrive409RsWSINJpCEwkZ_Jn3ajsCpLUCWDVV_PgObZfrw';
	public contacts: any;
	public oauth: any;
	public loggedIn: boolean = false;
	public service:any;
	public oauthData: any;
	public loginURL = 'https://login.salesforce.com';
	public callbackURL = 'http://localhost:4200/oauthcallback.html';

  constructor() { }

  	ngOnInit() {

	  	/*if(!localStorage.getItem('accessToken')) {

	  		this.login();

	  	} else {
	  		console.log("already logged in");
	  		console.log(this.loggedIn);
	  	}; 
*/

  	}

  	login() {

	  	this.oauth = OAuth.createInstance(this.clientId, this.loginURL, this.callbackURL );

	  	this.oauth.login()
	  		.then((oauthData) => {
	  			this.service = DataService.createInstance(oauthData, {proxyURL: "https://adamsappcloud.my.salesforce.com/"});
	  			//set user details in local storage
	  			localStorage.setItem('accessToken', this.service.accessToken);
	  			localStorage.setItem('instanceURL', this.service.instanceURL);
	  			localStorage.setItem('userId', this.service.userId);
	  			this.loggedIn = true;
	  			console.log(oauthData);
	  			this.loadContacts();
	  			//window.location.reload();
	  		});

  	}

  	loadContacts() {
  		console.log('instance is: ' + JSON.stringify(this.service));
  		this.service.query('select id, Name from Contact LIMIT 50')
  		.then((response) => {
  			console.log('length of records: ' + response.records.length);
            this.contacts = response.records;
            console.log('contacts are: ' + JSON.stringify(this.contacts));
        });
  	}

  	logout() {

  		localStorage.clear();
  		!this.loggedIn;
  		window.location.reload();
  	}


}
