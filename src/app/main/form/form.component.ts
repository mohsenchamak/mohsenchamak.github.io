import { OptionListData } from './form-models';
import { FormService } from './form.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  accountList: any = [];
  transfereeList: any = [];
  constructor(private fb: FormBuilder, private service: FormService) {
    this.form = this.fb.group({
      Date: ['', Validators.required],
      subject: ['', Validators.required],
      description: [''],
      CUSR28005: ['', Validators.required],
      CUSR28006: ['', Validators.required],
      RUSR28007: [''],
      RUSR28008: [''],
    });
  }

  ngOnInit(): void {
    this.accountOptions();
    this.transfereeOptions();
  }

  accountOptions() {
    this.service.getComboData('PRSACC05').subscribe((r) => {
      this.accountList = r.data;
    });
  }

  searchOnAccount(data: string) {
    this.service.searchInOptions(data, 'PRSACC05').subscribe((r) => {
      this.accountList = r.data;
    });
  }

  transfereeOptions() {
    this.service.getComboData('ACC000000004001').subscribe((r) => {
      this.transfereeList = r.data;
    });
  }

  searchOnTransferee(data: string) {
    this.service.searchInOptions(data, 'PRSACC05').subscribe((r) => {
      this.accountList = r.data;
    });
  }

  save() {
    let date = this.form.controls['Date'].value.replaceAll('/', '');
    let finalDataToSend = this.service.addObject(
      date,
      this.form.controls['subject'].value,
      this.form.controls['description'].value,
      this.form.controls['CUSR28005'].value,
      this.form.controls['CUSR28006'].value,
      this.form.controls['RUSR28007'].value,
      this.form.controls['RUSR28008'].value
    );
    this.service.saveForm(finalDataToSend).subscribe(r => {
    });
  }
}
