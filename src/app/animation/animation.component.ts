import {Component, OnInit, trigger, state, style, transition, animate, keyframes, group} from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(370px)'
      })),
      transition('normal => highlighted', animate(1200)),
      transition('highlighted => normal', animate(300))
    ]),
    trigger('doubleState', [
      state('normal', style({
        'background-color': 'blue',
        'transform': 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'red',
        transform: 'translateX(370px)'
      })),
      transition('normal <=> highlighted', animate(600)),
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(0px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0px) scale(0.5)'
      })),
      transition('normal => highlighted', animate(1200)),
      transition('highlighted => normal', animate(300)),
      transition('shrunken <=> *', [
          style({'background-color': 'orange'}),
          animate(1000, style({borderRadius: '50px'})),
          animate(500)
      ])
    ]),
    trigger('list1', [
      state(
        'in (the list, or anything else)',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(
        'void => *', [
          style({opacity: 0, transform: 'translateX(200px)'}),
          animate(300)
        ]
      ),
      transition(
        '* => void',
        [
          animate(300, style({transform: 'translateX(200px)', opacity: 0}))
        ]
      )
    ]),
    trigger('list2', [
      state(
        'right',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(
        'void => *', [
          style({opacity: 0, transform: 'translateX(-200px)'}),
          animate(300)
        ]
      ),
      transition(
        '* => void',
        [
          animate(300, style({transform: 'translateX(-200px)', opacity: 0}))
        ]
      )
    ]),
    trigger('list3', [
      state(
        'right',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(
        'void => *', [
          animate(1000, keyframes([
            // each of these steps would be equally long if there were no offsets
            style({transform: 'translateX(-100px)', opacity: 1, offset: 0}),
            style({transform: 'translateX(-50px)',  opacity: 0.5, offset: 0.3}),
            style({transform: 'translateX(-20px)', opacity: 1, offset: 0.8}),
            style({transform: 'translateX(0px)', opacity: 1, offset: 1}) //done
          ]))
        ]
      ),
      transition(
        '* => void',
        group([
          // groups animations which should happen at the same time
          animate(300, style({color: 'red'})),
          animate(800, style({transform: 'translateX(-200px)', opacity: 0}))
        ])
      )
    ])
  ]
})
export class AnimationComponent implements OnInit {
  state = 'normal';
  doubleState = 'normal';
  wildState = 'normal';

  list1 = ['Milk', 'Sugar', 'Bread'];
  list2 = [];

  constructor() { }

  ngOnInit() {
    //this.state= 'highlighted';
  }

  onAnimate1() {
    this.state = (this.state == 'normal') ? 'highlighted' : 'normal';
    this.doubleState = (this.doubleState == 'normal') ? 'highlighted' : 'normal';
    this.wildState = (this.wildState == 'normal') ? 'highlighted' : 'normal';
  }
  onAnimate2() {
    this.doubleState = (this.doubleState == 'normal') ? 'highlighted' : 'normal';
    //this.wildState = (this.wildState == 'normal') ? 'highlighted' : 'normal';
  }
  onShrink() {
    this.wildState = 'shrunken';
  }

  onAddItem(item) {
    this.list1.push(item);
  }

  onDelete(item) {
    this.list1.splice(this.list1.indexOf(item), 1);
  }

  onMove() {
    if (this.list1.length>0) this.list2.push(this.list1.shift());
  }

  onMoveBack() {
    if (this.list2.length>0) this.list1.unshift(this.list2.pop());
  }

  animationStarted(event) {
    console.log("Animation started:");
    console.log(event);
  }
  animationEnded(event) {
    console.log("Animation ended:");
    console.log(event);
  }

}
