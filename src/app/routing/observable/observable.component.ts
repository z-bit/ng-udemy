import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';



@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  private subscription: Subscription;
  id: string;
  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) {
    this.subscription =  activatedRoute.params.subscribe( (param) => this.id = param['id'] );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
    alert('ngOnDestroy: subscription is now unsubscribed!');
  }

  onClick() {
    this.router.navigate(['/routing']);
  }

}
