import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public items = [
    'Tarefa número 1',
    'Tarefa número 2',
    'Tarefa número 3',
    'Tarefa número 4',
  ];
  public tarefa = '';

  addTarefa() {
    this.items.push(this.tarefa);
  }

  removeTarefa(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}