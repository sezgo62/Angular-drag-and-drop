import { ChangeDetectorRef, Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-drag-and-drop';
  fruits = ['banana', 'apple', 'pear', 'tangerines'];
  storageBox = [];
  myIndex: any;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  /*drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fruits, event.previousIndex, event.currentIndex);
  }*/

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
 }

  drop(event: CdkDragDrop<any>) {
    console.log('step 1 cleared');
debugger;
    if (event.previousContainer.data === event.container.data) {
      
      // The item was moved from fruits to storageBox
      transferArrayItem(event.previousContainer.data,

                        event.container.data,

                        event.previousIndex,

                        event.currentIndex);
                        debugger;
                        this.myIndex = event.previousIndex;
    } else if (event.previousContainer.data === this.storageBox && event.container.data === this.fruits) {
      // The item was moved from storageBox to fruits
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    } else {
      // The item was moved within the same container
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  /*drop(event: CdkDragDrop<any>) {
    console.log('step 1 cleared');
    debugger;
    transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
    
}*/
  
  
}
