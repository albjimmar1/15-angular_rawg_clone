import { Component } from '@angular/core';
import { GameDetails, Rating } from '../../../../core/models/game-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details-page',
  standalone: true,
  imports: [],
  templateUrl: './game-details-page.component.html',
  styleUrl: './game-details-page.component.scss'
})
export class GameDetailsPageComponent {
  gameDetails: GameDetails;
  ratings: Array<Rating>;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameDetails = this.route.snapshot.data['game'] as GameDetails;
    this.ratings = this.route.snapshot.data['game'].ratings;
  }

}
