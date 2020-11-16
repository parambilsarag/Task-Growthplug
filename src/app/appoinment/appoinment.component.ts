import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  appointmentForm;
  @Output() outputEvent = new EventEmitter<any>();
  days: any = { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, };
  time: any = { morning: false, afternoon: false, evening: false };
  isDaysSelected = true;
  isTimesSelected = true;
  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.initAppointmentForm();
  }
  initAppointmentForm() {
    this.appointmentForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
    });
  }

  requestAppointment() {
    this.validateDays();
    if (!this.validateForm(this.appointmentForm)) {
      return;
    }
    if (!this.validateDays()) {
      this.isDaysSelected = false;
      if (!this.validateTime()) {
        this.isTimesSelected = false;
      } else {
        this.isTimesSelected = true;
      }
      return;
    } else {
      this.isDaysSelected = true;
    }
    if (!this.validateTime()) {
      this.isTimesSelected = false;
      if (!this.validateDays()) {
        this.isDaysSelected = false;
      } else {
        this.isDaysSelected = true;
      }
      return;
    } else {
      this.isTimesSelected = false;
    }
    const responseData = {
      firstName: this.appointmentForm.value.firstName,
      lastName: this.appointmentForm.value.lastName,
      email: this.appointmentForm.value.email,
      phone: this.appointmentForm.value.phoneNumber,
      days: this.days,
      time: this.time
    };
    console.log('responseData', responseData);
    this.outputEvent.emit(true);
  }

  validateForm(form) {
    Object.keys(form.controls).forEach(key => {
      const ctrl = form.get(key);
      ctrl.markAsTouched({ onlySelf: true });
    });
    return !form.invalid;
  }

  validateDays() {
    for (const day in this.days) {
      if (this.days[day]) {
        return true;
      }
    }
    return false;
  }

  validateTime() {
    for (const item in this.time) {
      if (this.time[item]) {
        return true;
      }
    }
    return false;
  }
}
