import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oathcallback',
  templateUrl: './oathcallback.component.html',
  styleUrls: ['./oathcallback.component.css']
})
export class OathcallbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var event = new CustomEvent("oauthCallback", {"detail": window.location.href});
    window.opener.document.dispatchEvent(event);
    window.close();

  }

}
