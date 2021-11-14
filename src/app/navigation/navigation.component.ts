import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fb-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
}
