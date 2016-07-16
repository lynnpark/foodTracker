import {Log} from './log';

export var LOGS: Log[] = [
    {
        id: 0,
        dateTime: new Date(2011, 0, 1, 2, 3, 4, 567),// 1 Jan 2011, 02:03:04.567 in local timezone
        formType: 'waste',
        itemName: 'Bacon',
        itemType: 'menu',
        quantity: 10,
        unit: 'lbs',
        lossReason: 'spoiled'
    },
    {
        id: 1,
        dateTime: new Date(2012, 0, 3, 5, 7, 1, 467),
        formType: 'repurposed',
        itemName: 'Filet Mignon',
        itemType: 'menu',
        quantity: 100,
        unit: 'ea'
    }
]