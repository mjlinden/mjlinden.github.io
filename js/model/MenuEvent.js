
export class MenuEvent extends Event {
    static CHANGED = "drankChanged";

    constructor(current) {
        super(MenuEvent.CHANGED);
        this.current = current;
    }
}