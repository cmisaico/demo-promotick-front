import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarACarrito(){
    this.router.navigate(['/carrito']);
  }

}
