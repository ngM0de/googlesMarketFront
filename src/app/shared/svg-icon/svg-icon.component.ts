import {AfterViewInit, Component, Input, OnChanges, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [innerHTML]="svgIcon"></div>`,
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnChanges {
  @Input() name?: string;
  @Input() color: string;
  public svgIcon: any;

  constructor(private httpClient: HttpClient,
              private sanitizer: DomSanitizer) {
  }

  private setSvgColor(svg: string): string {
    if (this.color) {
      return svg.replaceAll('white', this.color)
    }
    return svg;
  };

  public ngOnChanges(): void {
    if (!this.name) {
      this.svgIcon = '';
      return;
    }
    this.httpClient
      .get(`assets/svg/${this.name}.svg`, {responseType: 'text'})
      .subscribe(value => {
        value = this.setSvgColor(value)
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);


      });
  }
}
