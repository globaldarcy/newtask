import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public projects = [
    {
      name: "某某公司 ERP 系统",
      desc: "为某某公司开发的定制化 ERP 系统",
      coverImg: "/assets/img/covers/20.jpg"
    },
    {
      name: "某某公司 ERP 系统",
      desc: "为某某公司开发的定制化 ERP 系统",
      coverImg: "/assets/img/covers/1.jpg"
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {dark: false}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent);
  }
}
