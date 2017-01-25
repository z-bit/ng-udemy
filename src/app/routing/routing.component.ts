import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  ids: string;
  ido: string;
  pn: string; // parameter name
  pv: string; // parameter value
  queryParam: any;
  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {
    this.ids = activatedRoute.snapshot.params['id'];
    this.pn = 'name';
    this.pv = 'Julien';
  }
  ngOnInit() {}

  onClick() {
    this.router.navigate(['routing','detail'], {queryParams: {name: this.pv}});
  }
}
