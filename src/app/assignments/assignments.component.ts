import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  titre = "Mon application sur les Assignments !"
  assignments = [
    {
      nom: "Angular",
      date: "02-02-2022",
      rendu: true
    },
    {
      nom: "JEE",
      date: "02-03-2022",
      rendu: false
    },
    {
      nom: "PHP",
      date: "02-02-2022",
      rendu: true
    }
  ]
}
