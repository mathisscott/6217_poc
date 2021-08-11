import { Component, ElementRef, OnInit, VERSION } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import { ClarityIcons } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import '@cds/core/button/register.js';

import { NothingFoundIcon, EmptySearchResultIcon } from './custom-icons';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

type UserData = { [key: string]: string | number };

const UsersData: UserData[] = [{ id: 111, name: 'sam', color: 'red' },
{ id: 111, name: 'john', color: 'red' },
{ id: 121, name: 'ram', color: 'red' },
{ id: 131, name: 'tom', color: 'red' },
{ id: 141, name: 'jam', color: 'red' }];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  isGridFiltered = false;
  allUserData = UsersData;
  users: UserData[] = [];
  eventStreamSubscription: Subscription;
  inputValue: string = '';
  delay = 500;

  ngOnInit() {
    this.users = UsersData;
  }
  constructor(private elementRef: ElementRef) {
    ClarityIcons.addIcons(NothingFoundIcon, EmptySearchResultIcon);

    const eventStream = fromEvent(elementRef.nativeElement, 'keyup')
      .pipe(
        map(() => this.inputValue),
        debounceTime(this.delay),
        distinctUntilChanged()
      );

    this.eventStreamSubscription = eventStream.subscribe((input: any) => {
      input = (input && input.trim()) || '';
      this.isGridFiltered = input.length ? true : false;
      this.filterGrid(input);
    });
  }

  toggle() {
    this.isGridFiltered = !this.isGridFiltered;
  }

  filterGrid(inputText: string) {
    if (inputText) {
      this.users = this.allUserData.filter(user => (user.name as string).includes(inputText));
    } else {
      this.users = this.allUserData;
    }
  }
}
