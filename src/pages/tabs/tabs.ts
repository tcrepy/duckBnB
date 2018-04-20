import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { ProfilPage } from '../profil/profil';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab3Root = ProfilPage;

  constructor() {

  }
}
