import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'myportfolio';

  OpenVertNav() {
    var e = document.getElementById("idNav");
    if (e.className === "nav") {
      e.className += " responsive";
    } else {
      e.className = "nav";
    }
  }

  CloseVertNav() {
    document.getElementById("idNav").className = "nav";
  }

}
