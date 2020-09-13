import {MenuEvent} from "../model/MenuEvent.js"
export class MenuView {
    constructor(menu) {
        this.menu = menu;
        this.menu.addEventListener(MenuEvent.CHANGED, this.onMenuChanged);
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element
    }

    onMenuChanged = event => {
        this.updateSelection(event.current);

    };



    bindChoiceButton(handler) {
        this.choices = document.querySelectorAll("#btn1, #btn2, #btn3, #btn4, #btn5");
        this.choices.forEach(element => element.addEventListener('click', event => {

            handler(element.id);
        }))
    }

    bindSubmitButton(handler) {
        this.submit = this.getElement("#inleveren > button");
        this.submit.addEventListener('click', event => {
            handler();
        })
    }

    updateSelection(selectedProduct)
    {
        this.choices = document.querySelectorAll("#btn1, #btn2, #btn3, #btn4, #btn5");
        this.choices.forEach(element => {
            if(selectedProduct===element.id)
                element.setAttribute('style', 'background-color:#99ceff');
             else
                element.setAttribute('style', 'background-color:#e6f3ff');
        });

        let selected=document.querySelector("#keuze");
        let productId="p";
        productId=productId + selectedProduct.substr(3,1);
        let choice=document.querySelector(`#${productId}`);
        selected.innerHTML=`Je hebt gekozen voor ${choice.innerHTML}`;
       // document.querySelector("#gekozen").setAttribute('style','display:inline')
    }



}
