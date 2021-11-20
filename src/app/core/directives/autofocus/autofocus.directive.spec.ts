import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HostComponent } from '@ngneat/spectator';
import { AutofocusDirective } from './autofocus.directive';

/* eslint-disable @typescript-eslint/no-explicit-any */
const elementRefMock = {
  nativeElement: {
    focus: () => null
  }
} as any;

describe('Directive: LetDirective', () => {
  let letDirective: AutofocusDirective;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AutofocusDirective, HostComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(HostComponent);
      fixture.detectChanges();

      letDirective = new AutofocusDirective(elementRefMock);
      letDirective.ngAfterContentInit();
    })
  );

  it('should create AutofocusDirective', () => {
    expect(letDirective).toBeTruthy();
  });
});
