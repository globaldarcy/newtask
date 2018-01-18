import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: "待办",
      tasks: [
        {
          id: 1,
          desc: "任务一: 赶快出发去万达",
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-10'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: "任务二: 赶快出发去万达",
          completed: false,
          priority: 2,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-9'
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: "任务三: 赶快出发去万达",
          completed: true,
          priority: 1,
          owner: {
            id: 3,
            name: '王五',
            avatar: 'avatars:svg-8'
          },
          dueDate: new Date(),
        },
        {
          id: 4,
          desc: "任务四: 赶快出发去万达",
          completed: false,
          priority: 3,
          owner: {
            id: 4,
            name: '刘烨',
            avatar: 'avatars:svg-7'
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: "进行中",
      tasks: [
        {
          id: 1,
          desc: "任务一: 什么情况啊什么情况啊什么情况啊",
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-1'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: "任务二: 什么情况啊",
          completed: false,
          priority: 1,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-2'
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: "任务三: 什么情况啊什么情况啊什么情况啊",
          completed: false,
          priority: 2,
          owner: {
            id: 3,
            name: '王五',
            avatar: 'avatars:svg-3'
          },
          dueDate: new Date(),
        },
        {
          id: 4,
          desc: "任务四: 什么情况啊",
          completed: false,
          priority: 3,
          owner: {
            id: 4,
            name: '刘烨',
            avatar: 'avatars:svg-4'
          },
          dueDate: new Date(),
        },
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
