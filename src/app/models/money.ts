export class Money {
    constructor(
        public amount: number,
        public currency: string //todo: use enum to be safer
    ) {}
}
