import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar, MatIcon, MatToolbarRow, MatBadge, MatList, MatListItem, MatDivider, MatRipple, MatListAvatarCssMatStyler, MatLine, MatPaginator, MatSelect, MatFormField, MatOption, MatPseudoCheckbox, MatTooltip, MatTooltipModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    ObserversModule,
    OverlayModule,
    MatTooltipModule,
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
    MatFormField,
    MatSelect,
    MatOption,
    MatPaginator,
    NavbarComponent,
    FavoritesComponent
  ],
  exports: [
    MatList,
    MatListItem,
    MatDivider,
    MatRipple,
    MatIcon,
    MatListAvatarCssMatStyler,
    MatTooltip,
    MatPaginator,
    NavbarComponent
  ]
})
export class SharedModule { }
