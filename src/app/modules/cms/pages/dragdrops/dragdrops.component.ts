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
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  newItems: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  editIdex: number = -1;
  //data: string | null = null;

  faCircleRight = faCircleRight;
  faCircleLeft = faCircleLeft;
  faCircleXmark = faCircleXmark;
  faCirclePlus = faCirclePlus;
  faTrashCan = faTrashCan;
  faCircleDot = faCircleDot;

  constructor(public themeService: ThemeService) {}

  addItem() {
    this.items.push('nuevo item');
  }
  removeItem(index: number) {
    //console.log(index);
    const deletedData = this.newItems.splice(index, 1);
    //console.log('deleted: ' + deletedData);
  }
  removeAllItems() {
    this.newItems = [];
  }

  receiveItemName(data: any[]) {
    this.items.splice(data[1], 1, data[0]);
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
