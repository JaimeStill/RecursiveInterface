import {
  Component,
  OnInit
} from '@angular/core';

import { FileSystemService } from '../../services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [FileSystemService]
})
export class HomeComponent implements OnInit {
  constructor(
    public fileSystem: FileSystemService
  ) { }

  ngOnInit() {
    this.fileSystem.getFolder(`C:\\Users\\jpsti`);
  }

  loadDirectory = (path: string) => this.fileSystem.getFolder(path);
}
