import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ConfirmDialogComponent],
        imports: [ReactiveFormsModule, MatDialogModule],
        providers: [
          {
            provide: MAT_DIALOG_DATA,
            useValue: {
              cancelText: 'cancelText',
              confirmText: 'confirmText',
              message: 'message',
              title: 'title'
            }
          },
          {
            provide: MatDialogRef,
            useValue: {
              close: () => {
                return null;
              }
            }
          }
        ]
      }).compileComponents();
      fixture = TestBed.createComponent(ConfirmDialogComponent);
      component = fixture.componentInstance;
      component.isOkayActive = true;
      fixture.detectChanges();
    })
  );

  it('should create ConfirmDialogComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should simulate cancel', () => {
    const spyFn = spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(spyFn).toHaveBeenCalled();
  });

  it('should simulate confirm', () => {
    const spyFn = spyOn(component, 'confirm').and.callThrough();
    component.confirm();
    expect(spyFn).toHaveBeenCalled();
  });
});
