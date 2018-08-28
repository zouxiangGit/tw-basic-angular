import { Component, OnInit } from '@angular/core';
import { RootService } from '../../core/root.service';
import { ModuleService } from '../module.service';
import { ParentService } from './parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent-common.css', './parent.component.css'],
  providers: [ParentService]
})
export class ParentComponent implements OnInit {

  constructor(
    public rootService: RootService,
    public moduleService: ModuleService,
    public parentService: ParentService,
  ) { }

  ngOnInit() {
  }

  changeRootValue() {
    this.rootService.changeValue();
  }

  changeParentValue() {
    this.parentService.changeValue();
  }
}
