import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-c',
  templateUrl: './t-c.component.html',
  styleUrl: './t-c.component.css'
})
export class TCComponent implements OnInit {
  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.isChecked) {
      // Perform form submission logic here
      console.log("Form submitted successfully!");
    }
  }

}
