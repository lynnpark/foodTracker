export class Log {
    constructor(
        public id: number,
        public dateTime: Date,
        public formType: string,
        public itemName: string,
        public itemType: string,
        public quantity: number,
        public unit: string,
        public lossReason?: string
    ) {}
}