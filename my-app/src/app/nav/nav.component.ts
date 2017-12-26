import { Component, OnInit } from '@angular/core';

import { Section } from '../section';
import { SECTIONS } from '../mock-sections';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sections = SECTIONS

  selectedSection: Section
  
  onSelect(section: Section): void {
  	this.selectedSection = section
  }

  constructor() { }

  ngOnInit() {
  }

}
