import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Programing languages';

  skills : Array<string> = ['Javascript', 'Typescript', 'Python', 'NodeJs', 'Angular'];

  diseHead = 'Diseases'

  diseases : Array<string> = ['Arthritis', 'Hypertension', 'Diabetes', 'Angina Pectoris', 'Epilepsy'];

  micro = 'MicroOrganism'

  microOrganism : Array<string> = ['Virus', 'Bacteria', 'Fungi', 'Nematode'];

  gadget = 'Electronic Gadgets'

  electronicGadgets : Array<string> = ['Mobile', 'Desktop', 'Ipad', 'SmartWatch'];

  pharmacy = 'Pharma Topics'

  pharmaSub : Array<string> = ['Pharmacognosy', 'Pharmaceutics', 'Pharmacology', 'Human Anatomy', 'Hospital Pharmacy']
}
