import {Component} from '@angular/core';
import {IonicPage, Modal, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {CreateAccountPage} from "../create-account/create-account";
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    gotoCreate() {
        this.navCtrl.push(CreateAccountPage);
    }

    openModal() {
        let modal = this.modalCtrl.create(ModalPage);
        modal.present();
    }


}
