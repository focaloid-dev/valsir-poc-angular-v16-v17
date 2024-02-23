import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

interface CheckboxValues {
  [key: string]: boolean;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() checkboxValues = new EventEmitter<CheckboxValues>();
  @Input() checkboxLabels: string[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngAfterViewInit(): void {
    if (this.checkboxLabels.length) {
      console.log('Checkbox labels:', this.checkboxLabels);
      this.checkboxLabels.forEach((label, index) => {
        // console.log("🚀 ~ FilterComponent ~ this.checkboxLabels.forEach ~ label:", label)
        // this.form.addControl('checkbox' + (index + 1), new FormControl(false));
      });
      console.log('Form group:', this.form);
    }
  }

  onCheckboxChange() {
    const values: CheckboxValues = {};
    this.checkboxLabels.forEach((label, index) => {
      const checkbox = this.form.get('checkbox' + (index + 1));
      if (checkbox) {
        values[label] = checkbox.value;
      }
    });
    // this.checkboxValues.emit(values);
  }
}
