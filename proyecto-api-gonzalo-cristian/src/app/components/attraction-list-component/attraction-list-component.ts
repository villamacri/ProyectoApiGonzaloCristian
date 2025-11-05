import { Component } from '@angular/core';
import { ApiService } from '../../service/api-service';
import { Attraction } from '../../interface/attractionsResponse';;

@Component({
  selector: 'app-attraction-list-component',
  imports: [],
  templateUrl: './attraction-list-component.html',
  styleUrl: './attraction-list-component.css',
})
export class AttractionListComponent {
  attractions: Attraction[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAttractions().subscribe((resp) => {
      this.attractions = resp.results;
    });

}
}
