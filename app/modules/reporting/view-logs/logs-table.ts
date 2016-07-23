import {Component, OnInit} from '@angular/core';
import {Log} from '../../tracker/log';

import {LogsService} from '../../tracker/logs-service';
import {InputText, Button, SelectButton, SelectItem, Dialog} from 'primeng/primeng';

import {LogPipe} from '../../tracker/log-pipe';

// log has 8 objects

@Component({
    selector: 'logs-table',
    templateUrl: './app/modules/reporting/view-logs/logs-table.html',
    directives: [Button, Dialog],
    providers: [LogsService],
    pipes: [LogPipe]
})

export class LogsTable implements OnInit {
    logs: Log[];

    display: boolean = false;
    
    currentLog: Log;
    currentItemName: string;
    currentQuantity: number;
    currentUnit: string;
    currentLossReason: string;

    constructor(private logsService: LogsService) { }

    getLogs() {
        this.logsService.getLogs().then(logs => this.logs = logs);
    }

    ngOnInit(){
        this.getLogs();
        console.log("init logs table");
    }

    sortBy(criteria: string){
        this.logs.sort(function(a, b){
            if(a[criteria] < b[criteria]) return -1;
            if(a[criteria] > b[criteria]) return 1;
            return 0;
        });
    }

    filterByForm(criteria: string) {
        this.logs = this.logs.filter(log =>log.formType === criteria);
    }

    removeFilter(){
        this.getLogs();
    }

    showDialog(log: Log) {
        this.currentLog = log;
        this.currentItemName = log.itemName;
        this.currentQuantity = log.quantity;
        this.currentUnit = log.unit;
        this.currentLossReason = log.lossReason;
        this.display = true;
    }

    submitEdit(){
        this.currentLog.itemName = this.currentItemName;
        this.currentLog.quantity = this.currentQuantity;
        this.currentLog.unit = this.currentUnit;
        this.currentLog.lossReason = this.currentLossReason;
        this.display=false;
    }
}