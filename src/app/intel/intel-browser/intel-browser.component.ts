import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-intel-browser',
  templateUrl: './intel-browser.component.html',
  styleUrls: ['./intel-browser.component.css']
})
export class IntelBrowserComponent implements OnInit {

  constructor(private domSanitaizer: DomSanitizer ) { }

  options = [
    {name: 'ESA', url: 'http://www.esa.int/ESA'},
    {name: 'POLSA', url: 'https://www.polsa.gov.pl/pl'}
  ];

  source: SafeResourceUrl;

  ngOnInit() {
  }

  selectSource(url: string){
    this.source = this.domSanitaizer
    .bypassSecurityTrustResourceUrl(url);
  }

}
