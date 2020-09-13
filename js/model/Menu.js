import {MenuEvent} from "./MenuEvent.js";

export class Menu extends EventTarget {
    constructor() {
        super();
        this.currentProduct = 0;
        this.reset();
    }

    setGivenAnswer(id) {
        this.currentProduct=id;
        this._commit();
    }
    getQuestions() {
        return this.questionsArray;
    }

    reset() {

        this.currentProduct = 0;
        this._commit();
    }

    _commit() {
        this.dispatchEvent(new MenuEvent(this.currentProduct))
    }
}