import { Component } from '@angular/core';
import { IonicPage, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-modal',
    templateUrl: 'modal.html',
})

export class ModalPage {
    paramItem : any;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public navCtrl: NavController
    ) {
        this.paramItem = this.params.get('item');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    gotoLogin() {
        this.navCtrl.push(TabsPage);
    }
}