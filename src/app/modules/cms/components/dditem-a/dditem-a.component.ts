import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { RequestStatus } from '@models/request-status.model';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-dditem-a',
  templateUrl: './dditem-a.component.html',
})
export class DditemAComponent {
  @Input() item: string | null = null;
  @Input() index: number | null = null;
  @Output() dataEvent = new EventEmitter<any[]>();
  list: any[] = [];
  status: RequestStatus = 'init';
  faPaperclip = faPaperclip;
  updateItemName = this.formBuilder.group({
    itemName: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    public themeService: ThemeService
  ) {}
  editItemName() {
    this.status = 'loading';
    this.updateItemName.setValue({ itemName: this.item });
  }
  saveChangeItemName() {
    if (this.updateItemName.valid) {
      this.status = 'loading';
      const keyword = this.updateItemName.get('itemName')?.getRawValue();
      if (keyword) {
        this.item = keyword;
        this.list[0] = keyword;
        this.list[1] = this.index;
        //console.log(this.list);
        this.dataEvent.emit(this.list);
      }
    }
  }
  onClose() {
    this.status = 'init';
  }
}
