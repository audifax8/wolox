import { Injectable } from '@angular/core';
import { IFormCommand } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommadService {

  private commandList: IFormCommand[] = [];

  constructor() {
  }

  public addCommand(command: IFormCommand): void {
    this.commandList = this.commandList.concat(command);
  }

  public executeCommands(): void {
    this.commandList.forEach(
      (commad) => {
        commad.execute();
      }
    );
    this.commandList = [];
  }
}
