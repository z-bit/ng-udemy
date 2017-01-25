import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  code0 = `<a routerLink="detail" [queryParams]="{'name': pv}">routerLink</a> 
Parameter value (pv) without {{}} !!`
  code1 = `this.router.navigate(['routing', 'detail'], {queryParams: {name: this.pv}});`;
  code2 = `this.snapshotParam = activatedRoute.snapshot.queryParams['name'];`;
  code3 = `this.subscription = activatedRoute.params.subscribe( 
    (queryParam) => this.observableParam = queryParam['name'] 
);`
  snapshotParam: string;
  observableParam: string;
  subscription: Subscription;
  constructor(
      private activatedRoute: ActivatedRoute
  ) {
      this.snapshotParam = activatedRoute.snapshot.queryParams['name'];
      this.subscription = activatedRoute.queryParams.subscribe(
          (queryParam) => this.observableParam = queryParam['name'] );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
