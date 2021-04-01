import { Component, OnInit, ViewEncapsulation, VERSION } from '@angular/core';
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject,
  from,
} from 'rxjs';
import { delayWhen, filter, map, take, timeout } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  ngOnInit() {}

  run() {}

  public get angularVersion(): string {
    return VERSION.full;
  }
}
