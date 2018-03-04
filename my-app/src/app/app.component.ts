import { Component, OnInit } from '@angular/core';

import { SectionService } from './shared/section.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SectionService
  ]
})
export class AppComponent implements OnInit {

  sections = []

  selectedSection: Object
  
  mainFadeOut = false

  onSelect(section: Object): void {
  	this.selectedSection = section
  }

  onBack() {
  	this.mainFadeOut = true
  	setTimeout(() => {
	  	this.selectedSection = undefined
	  	this.mainFadeOut = false
	}, 800)
  }

  compareOrder(a,b) {
    if (a.acf.order < b.acf.order)
      return -1
    if (a.acf.order > b.acf.order)
      return 1
    return 0
  }

  loadSections() {
    this.sectionService.getSections().subscribe(
      data => this.sections = data.sort(this.compareOrder)
    )
  }

  constructor(private sectionService: SectionService) { }

  ngOnInit() {
    this.loadSections()
  }

}
