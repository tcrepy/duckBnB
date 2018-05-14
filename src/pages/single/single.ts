import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExplorePage } from '../../pages/explore/explore';
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the SinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single',
  templateUrl: 'single.html',
})
export class SinglePage {

  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglePage');
  }

  backtoExplore(){
      this.navCtrl.push(ExplorePage);
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

}
