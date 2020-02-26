import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { File } from '../../models';

@Component({
  selector: 'file',
  templateUrl: 'file.component.html'
})
export class FileComponent {
  @Input() file: File;
}
