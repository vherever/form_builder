import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  public currentYear: string;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear().toString();
    this.cdr.detectChanges();
  }
}
