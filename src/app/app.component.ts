import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dinosaurs:any[];
  // searchText = ""
  search:string = ""
  constructor(
    private _appService: AppService
  ) {

  }
  ngOnInit() {
    this.getDinos(this.search);
  }

  updateList(event) {
    // this.searchText = event.target.value
    this.getDinos(this.search)
  }

  getDinos(searctText) {
    this._appService.getDinos(searctText).subscribe((data)=>{
      this.dinosaurs = data;
    })
  }
}
