// Copyright (c) 2017 Tracktunes Inc

import { Component } from '@angular/core';

const APP_VERSION: string = '0.3.0-alpha.30';

/**
 * Page that displays info about the app.
 * @class AboutPage
 */
@Component({
    selector: 'about-page',
    templateUrl: 'about-page.html'
})
export class AboutPage {
    public version: string;

    /**
     * AboutPage modal constructor
     */
    constructor() {
        console.log('constructor()');
        this.version = APP_VERSION;
    }

}
