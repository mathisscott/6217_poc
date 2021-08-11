import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

import '@cds/core/icon/register.js';

/**
 * Custom placeholder component to be used with clarity grid.
 * Have different icons for Filtered vs Non Filtered Grid.
 */
@Component({
  selector: 'custom-grid-placeholder',
  templateUrl: './placeholder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomPlaceholderComponent implements OnChanges {

  @Input() isGridFiltered = false;
  @Input() title = '';

  ngOnChanges() {
    console.log('isGridFiltered ', this.isGridFiltered);
    console.log('title ', this.title);
  }

}
