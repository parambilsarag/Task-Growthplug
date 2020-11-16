import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppoinmentComponent } from '../appoinment/appoinment.component';
import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bsModalRef: BsModalRef;
  successModalRef: BsModalRef;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: false
  };

  customOptionsdemo: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

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
