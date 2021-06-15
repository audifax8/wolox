import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../technologies.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(
    //private readonly technologiesS: TechnologiesService
  ) { }

  ngOnInit(): void {
  }

}
