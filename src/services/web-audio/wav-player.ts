// Copyright (c) 2017 Tracktunes Inc

import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AUDIO_CONTEXT, WAV_MIME_TYPE } from './common';
import { WAV_CHUNK_LENGTH } from './record-wav';
import { WebAudioPlay } from './play';
import { isOdd, formatTime } from '../../models/utils/utils';
import { MasterClock } from '../master-clock/master-clock';
import { makeWavBlobHeaderView } from '../../models/utils/wav';
import { AppFS } from '../../services';

const AUDIO_BUFFER_SIZE: number = 128000.0;

/**
 * Audio Play functions based on WebAudio, originally based on code
 * of Ian McGregor here: http://codepen.io/ianmcgregor/pen/EjdJZZ
 * @class WebAudioPlay
 */
@Injectable()
export class WebAudioWavPlayer extends WebAudioPlayer {
    private oddKeyFileReader: FileReader;
    private evenKeyFileReader: FileReader;
    private appFS: AppFS;

    constructor(masterClock: MasterClock, appFS: AppFS) {
        console.log('WebAudioWavPlayer.constructor()');
        super(masterClock);
        this.oddKeyFileReader = new FileReader();
        this.evenKeyFileReader = new FileReader();
        this.appFS = appFS;
    }

    public setFileName(fileName: string): void {
        console.log('WebAudioWavPlayer.setFileName()');
    }

    public play(): void {
        // we play from this.pausedAt
        const chunkDuration: number = AUDIO_BUFFER_SIZE / SAMPLE_RATE;


        const stopRead = -1;


        this.appFS.loadAndDecodeChunk(this.pausedAt).subscribe(
            (audioBuffer1: AudioBuffer) => {
                const 
                // if needed here: if we're not at the end
                this.appFS.loadAndDecodeChunk(this.pausedAt).subscribe(
                    (audioBuffer2: AudioBuffer) => {
                    },
                    (err2: any) => {
                        alert(err2);
                    }
                );
            },
            (err1: any) => {
                alert(err1);
            }
        );
    }

    public stop(stopMonitoring: boolean = true): void {
        super.stop(stopMonitoring);
    }

    public togglePlayPause(): void {
        if (!this.isPlaying) {
            console.log('play from: ' + this.pausedAt);
            this.play();
        }
        else {
            this.pause();
            console.log('pause at: ' + this.pausedAt);
        }
    }
}
