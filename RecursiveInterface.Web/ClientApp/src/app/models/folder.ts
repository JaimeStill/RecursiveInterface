import { File } from './file';

export interface Folder {
  creationTime: Date;
  exists: boolean;
  loaded: boolean;
  path: string;
  folders: Folder[];
  files: File;
}
