import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { GameListComponent } from '../../../../shared/game-list/game-list.component';
import { GameSearchService } from '../../../../core/services/common/game-search.service';

@Component({
  selector: 'app-games-page',
  standalone: true,
  providers: [AutoDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GameListComponent],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.scss'
})
export class GamesPageComponent implements OnInit {
  $games = this.gameSearchService.$games;

  constructor(
    private gameSearchService: GameSearchService,
    private destroy$: AutoDestroyService) {
  }

  ngOnInit(): void {
    this.gameSearchService.queryString$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((title: string) => this.gameSearchService.searchGames(title)),
      takeUntil(this.destroy$)
    ).subscribe((data) => this.gameSearchService.setGames(data.results));
  }
}
