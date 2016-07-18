import {Component, OnInit} from '@angular/core';
import {Log} from '../../tracker/log';

import {LogsService} from '../../tracker/logs-service';

import {InputText, Button, SelectButton, SelectItem, Dialog} from 'primeng/primeng';

// log has 8 objects

@Component({
    selector: 'logs-table',
    templateUrl: './app/modules/reporting/view-logs/logs-table.html',
    directives: [Button, Dialog],
    providers: [LogsService]
    
})

export class LogsTable implements OnInit {
    logs: Log[];

    display: boolean = false;

    constructor(private logsService: LogsService) { }

    getLogs() {
        this.logsService.getLogs().then(logs => this.logs = logs);
    }

    ngOnInit(){
        this.getLogs();
    }

    showDialog() {
        this.display = true;
    }
}