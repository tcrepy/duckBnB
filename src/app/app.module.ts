import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ExplorePage} from '../pages/explore/explore';
import {ProfilPage} from '../pages/profil/profil';
import {TravelsPage} from "../pages/travels/travels";
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {CreateAccountPage} from "../pages/create-account/create-account";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        ExplorePage,
        ProfilPage,
        TravelsPage,
        TabsPage,
        LoginPage,
        CreateAccountPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ExplorePage,
        ProfilPage,
        TravelsPage,
        TabsPage,
        LoginPage,
        CreateAccountPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
