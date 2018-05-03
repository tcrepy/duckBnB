import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { ProfilPage } from '../profil/profil';
import { TravelsPage} from "../travels/travels";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ExplorePage;
  tab2Root = TravelsPage;
  tab3Root = ProfilPage;

  constructor() {

  }
}
