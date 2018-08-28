import { Component, OnInit } from '@angular/core';
import { RootService } from '../../../core/root.service';
import { ModuleService } from '../../module.service';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['../parent-common.css']
})
export class ChildAComponent implements OnInit {

  constructor(
    public rootService: RootService,
    public moduleService: ModuleService,
    public parentService: ParentService,
  ) { }

  ngOnInit() {
  }

  changeModuleValue() {
    this.moduleService.changeValue();
  }

}
