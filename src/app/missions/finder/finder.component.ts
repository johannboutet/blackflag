import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mission-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
})
export class FinderComponent implements OnInit {
  finderForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.finderForm = this.fb.group({
      cargo: '',
    });
  }
}
