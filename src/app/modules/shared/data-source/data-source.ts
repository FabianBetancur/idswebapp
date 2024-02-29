import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

export class GenericDataSource<T> extends DataSource<T> {
  private data = new BehaviorSubject<T[]>([]);
  //originalData: T[] = [];

  connect(): Observable<T[]> {
    return this.data;
  }
  init(data: T[]) {
    //this.originalData = data;
    this.data.next(data);
  }
  disconnect(): void {}
}
