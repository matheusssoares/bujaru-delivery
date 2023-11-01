import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, StepChangedArgs, THEME } from 'ng-wizard';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  defaultconfig: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    lang: {
      next: 'Próximo',
      previous: 'Anterior'
    }
  };

  constructor(
  ) {
  }




  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  stepChanged(_args: StepChangedArgs) {
    console.log(_args);

  };



}
