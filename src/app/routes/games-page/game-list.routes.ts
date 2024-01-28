import { Routes } from "@angular/router";
import { GameIdResolver } from "../../core/resolvers/game-id.resolver";

export const gameListRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/game-page/games-page.component').then(m => m.GamesPageComponent)
    },
    {
        path: 'games/:id',
        resolve: {
            game: GameIdResolver
        },
        loadComponent: () => import('./pages/game-details-page/game-details-page.component').then(m => m.GameDetailsPageComponent)
    }
];