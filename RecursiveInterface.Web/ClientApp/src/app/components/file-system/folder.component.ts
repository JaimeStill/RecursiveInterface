import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Folder } from '../../models';
import { FileSystemService } from '../../services';

@Component({
  selector: 'folder',
  templateUrl: 'folder.component.html',
  providers: [FileSystemService]
})
export class FolderComponent implements OnInit {
  @Input() folder: Folder;
  @Input() expanded = false;

  loading = false;

  constructor(
    private fileSystem: FileSystemService
  ) { }

  ngOnInit() {
    if (this.expanded) this.loadFolder();
  }

  toggleExpanded = () => this.expanded
    ? this.expanded = false
    : this.loadFolder();

  loadFolder = async () => {
    this.expanded = true;
    this.loading = true;
    const res = await this.fileSystem.getFolder(this.folder.path);
    this.loading = false;

    if (res) {
      this.folder = res;
      this.folder.loaded = true;
    }
  }
}
