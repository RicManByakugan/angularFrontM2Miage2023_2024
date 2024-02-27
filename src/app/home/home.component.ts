import { Component } from '@angular/core';
import { MatIconModule } from  '@angular/material/icon' ;
import { MatDividerModule } from  '@angular/material/divider' ;
import { MatButtonModule } from  '@angular/material/button' ;
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, MatDividerModule , MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
