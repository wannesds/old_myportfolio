import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'myportfolio';

  OpenVertNav() {
    var x = document.getElementById("idNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

  CloseVertNav() {
    document.getElementById("idNav").className = "nav";
  }

}
