import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SnackerService } from './snacker.service';
import { Folder } from '../models';

@Injectable()
export class FileSystemService {
  private folder = new BehaviorSubject<Folder>(null);
  folder$ = this.folder.asObservable();

  constructor(
    private http: HttpClient,
    private snacker: SnackerService
  ) { }

  getFolder = (path: string): Promise<Folder> => new Promise((resolve) => {
    this.http.get<Folder>(`/api/fileSystem/getFolder?path=${path}`)
      .subscribe(
        data => {
          console.log(data);
          this.folder.next(data);
          resolve(data);
        },
        err => {
          this.snacker.sendErrorMessage(err.error);
          resolve(null);
        }
      );
  });
}
