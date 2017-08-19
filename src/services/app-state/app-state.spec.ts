// Copyright (c) 2017 Tracktunes Inc

import { AppState } from './app-state';
import { isPositiveWholeNumber } from '../../models/utils/utils';
import { Storage } from '@ionic/storage';

const WAIT_MSEC: number = 60;

let storage: Storage = new Storage({}),
    appState: AppState = new AppState(storage),
    savedTabIndex: number;

describe('When appState initialized', () => {
    it('appState is not falsy', (done) => {
        setTimeout(
            () => {
                expect(appState).not.toBeFalsy();
                done();
            },
            WAIT_MSEC);
    });

    it('can read lastTabIndex', (done) => {
        setTimeout(
            () => {
                appState.getProperty('lastTabIndex').then(
                    (idx: number) => {
                        savedTabIndex = idx;
                        expect(isPositiveWholeNumber(idx)).toBe(true);
                        done();
                    }
                );
            },
            WAIT_MSEC);
    });

    it('can update lastTabIndex and read it', (done) => {
        setTimeout(
            () => {
                appState.updateProperty('lastTabIndex', 9999).then(
                    (bUpdated: boolean) => {
                        expect(bUpdated).toBe(9999);
                        appState.getProperty('lastTabIndex').then(
                            (prop: any) => {
                                expect(prop).toBe(9999);
                                done();
                            });
                    });
            },
            WAIT_MSEC);
    });

    it('can update lastTabIndex back to what it was', (done) => {
        setTimeout(
            () => {
                appState.updateProperty('lastTabIndex', savedTabIndex)
                    .then(
                        (bUpdated: boolean) => {
                            expect(bUpdated).toBe(savedTabIndex);
                            appState.getProperty('lastTabIndex').then(
                                (prop: any) => {
                                    expect(prop).toBe(savedTabIndex);
                                    done();
                                });
                        });
            },
            WAIT_MSEC);
    });
});
