import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfirmDialogService } from './confirm-dialog.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SafeHtmlPipeModule } from '../../core/pipes/safe-html-pipe/safe-html-pipe.module';
import { Observable, of } from 'rxjs';

export class ConfirmDialogServiceMock {
  open() {}

  confirmed() {
    return new Observable((observer) => {
      observer.next(true);
      observer.complete();
    });
  }

  manuallyCloseWithState() {
    return of(true);
  }
}

let service: ConfirmDialogService;

describe('ConfirmDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, SafeHtmlPipeModule],
      providers: [
        ConfirmDialogService,
        {
          provide: MatDialog,
          useValue: {
            open: () => {
              return {
                afterClosed: () => of(true)
              };
            }
          }
        }
      ]
    });

    service = TestBed.inject(ConfirmDialogService);
  });

  it('should be created ConfirmDialogService', () => {
    expect(service).toBeTruthy();
  });

  it('should simulate open', () => {
    const spyFn = spyOn(service, 'open').and.callThrough();
    service.open({
      title: 'title',
      cancelText: 'cancelText',
      confirmText: 'confirmText'
    });
    expect(spyFn).toHaveBeenCalled();
  });
});
