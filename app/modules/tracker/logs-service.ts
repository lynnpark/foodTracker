import {Log} from './log';
import {LOGS} from './mock-log-data';
import {Injectable} from '@angular/core';

@Injectable()
export class LogsService {

    getLogs() {
        return Promise.resolve(LOGS);
    }

    getLog(id: number) {
        return this.getLogs().then(logs => logs.filter(log =>log.id === id)[0]);
    }
}