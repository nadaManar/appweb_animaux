import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about',
  imports: [MatCardModule,  
    MatListModule,
    MatIconModule,
    MatDividerModule],
    templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
