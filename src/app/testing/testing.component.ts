import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service'; // Correct the import path

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  public data: any[];

  constructor(private dataService: DataserviceService) { } // Correct the service name

  ngOnInit(): void {
    this.dataService.getLists().subscribe((lists) => {
      this.data = lists;
    });
  }
}
