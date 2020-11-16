import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppoinmentComponent } from '../appoinment/appoinment.component';
import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  bsModalRef: BsModalRef;
  successModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openModal() {
    this.bsModalRef = this.modalService.show(AppoinmentComponent, { class: 'modal-bg'
       });
    this.bsModalRef.content.outputEvent.subscribe(result => {
      if (result) {
        this.bsModalRef.hide();
        this.successModalRef = this.modalService.show(SuccessModalComponent, { class: 'modal-bg'});
      }
     });
    }

}
