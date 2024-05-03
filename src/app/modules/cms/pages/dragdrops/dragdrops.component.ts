import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import {
  faCircleRight,
  faCircleLeft,
  faCircleXmark,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';
import {
  faCirclePlus,
  faPaperclip,
  faCircleDot,
} from '@fortawesome/free-solid-svg-icons';
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
  faCircleXmark = faCircleXmark;
  faCirclePlus = faCirclePlus;
  faTrashCan = faTrashCan;
  faPaperclip = faPaperclip;
  faCircleDot = faCircleDot;

  constructor(public themeService: ThemeService) {}

  addItem() {
    //this.items.push(`New Item ${this.newItems.length + 1}`);
    this.items.push('new item');
  }
  removeItem(index: number) {
    //console.log(index);
    this.newItems.splice(index, 1);
  }
  removeAllItems() {
    this.newItems = [];
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
