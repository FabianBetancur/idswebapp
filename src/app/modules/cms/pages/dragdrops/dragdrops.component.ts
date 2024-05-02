import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import {
  faCircleRight,
  faCircleLeft,
} from '@fortawesome/free-regular-svg-icons';

import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-dragdrops',
  templateUrl: './dragdrops.component.html',
})
export class DragdropsComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  newItems: string[] = ['Item 1', 'Item 2', 'Item 3'];

  faCircleRight = faCircleRight;
  faCircleLeft = faCircleLeft;

  constructor(public themeService: ThemeService) {}

  addItem() {
    //this.items.push(`New Item ${this.newItems.length + 1}`);
    this.items.push('new item');
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
