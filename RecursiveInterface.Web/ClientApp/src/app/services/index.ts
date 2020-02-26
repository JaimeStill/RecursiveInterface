import { CoreService } from './core.service';
import { FileSystemService } from './file-system.service';
import { SnackerService } from './snacker.service';
import { ThemeService } from './theme.service';

export const Services = [
  CoreService,
  FileSystemService,
  SnackerService,
  ThemeService
];

export * from './core.service';
export * from './file-system.service';
export * from './snacker.service';
export * from './theme.service';
