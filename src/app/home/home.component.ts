import { Component, OnInit } from '@angular/core';
import { OAuth, DataService} from 'forcejs';

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

	  	this.oauth = OAuth.createInstance(this.clientId);

	  	this.oauth.login()
	  		.then(oauthresult => {
	  			this.service = DataService.createInstance(oauthresult);
	  			//set user details in local storage
	  			localStorage.setItem('accessToken', this.service.accessToken);
	  			localStorage.setItem('instanceURL', this.service.instanceURL);
	  			localStorage.setItem('userId', this.service.userId);
	  			this.loggedIn = true;
	  			//window.location.reload();
	  		});

  	}

  	logout() {

  		localStorage.clear();
  		!this.loggedIn;
  		window.location.reload();
  	}


}
