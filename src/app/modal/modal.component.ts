import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  modalVisible: boolean = false;

  @Output()
  resetForm = new EventEmitter();

  showModal(){
    this.modalVisible = true;
  }
  
  hideModal(){
    this.modalVisible = false;
  }
  
  logIn(){
    alert("zalogowano");
    this.modalVisible = false;
    this.resetForm.emit();
  }


}
