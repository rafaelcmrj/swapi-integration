import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar, MatIcon, MatToolbarRow, MatBadge, MatList, MatListItem, MatDivider, MatRipple, MatListAvatarCssMatStyler, MatLine, MatPaginator, MatSelect, MatFormField, MatOption, MatPseudoCheckbox, MatTooltip, MatTooltipModule, MatLabel, MatFormFieldModule, MatInputModule, MatInput, MatSuffix, MatButton } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { HomeWorldPipe } from './pipes/homeworld.pipe';
import { FavoritePipe } from './pipes/favorite.pipe';

@NgModule({
  imports: [
    CommonModule,
    ObserversModule,
    OverlayModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    MatToolbar,
    MatToolbarRow,
    MatIcon,
    MatBadge,
    MatList,
    MatListItem,
    MatDivider,
    MatRipple,
    MatListAvatarCssMatStyler,
    MatPseudoCheckbox,
    MatSelect,
    MatOption,
    MatPaginator,
    MatButton,
    NavbarComponent,
    FavoritesComponent,
    HomeWorldPipe,
    FavoritePipe
  ],
  exports: [
    MatList,
    MatListItem,
    MatDivider,
    MatRipple,
    MatIcon,
    MatListAvatarCssMatStyler,
    MatTooltip,
    MatLabel,
    MatFormField,
    MatInput,
    MatSuffix,
    MatPaginator,
    MatButton,
    NavbarComponent,
    HomeWorldPipe,
    FavoritePipe
  ]
})
export class SharedModule { }
