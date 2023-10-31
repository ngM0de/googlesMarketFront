import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SvgIconComponent} from "../shared/svg-icon/svg-icon.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

}
