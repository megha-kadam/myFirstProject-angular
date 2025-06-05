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

  table = "Table"

  stdList = 'Students MarkList';

  studentGrades = [
	{
		name:'Jhon',
		math:85,
		science:90,
		english:88,
	},
	{
		name:'Jane',
		math:75,
		science:95,
		english:89,
	},
	{
		name:'Mike',
		math:78,
		science:83,
		english:80,
	},
	{
		name:'Sara',
		math:95,
		science:98,
		english:94,
	}
]

book = "Books with Author";

bookCollection = [
	{
		booktitle:'1984',
		author:'George Orwell',
		genre:'Dystopian',
		year:1949,
	},
	{
		booktitle:'To kill a Mockingbird',
		author:'George Orwell',
		genre:'Harper Lee',
		year:1960,
	},
	{
		booktitle:'The Great Gatsby',
		author:'F. Scott Fitzgerald',
		genre:'Fiction',
		year:1925,
	},
	{
		booktitle:'Moby Dick',
		author:'Herman Melville',
		genre:'Adventure',
		year:1851,
	},
]
}
