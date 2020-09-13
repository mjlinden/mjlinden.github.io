import {Menu} from "../model/Menu.js"
import {MenuView} from "../view/MenuView.js"

export class Controller {
    constructor() {
        this.menu = new Menu();

        this.menuView = new MenuView(this.menu);

        // Koppel de handlers aan de buttons
        this.menuView.bindChoiceButton(this.handleChoice);
       // this.menuView.bindSubmitButton(this.handleSubmit);


    }



    handleChoice = (id) => {
        this.menu.setGivenAnswer(id)
    };

    handleSubmit = () => {
        window.alert('Terug naar een ander menu')
    };
}
