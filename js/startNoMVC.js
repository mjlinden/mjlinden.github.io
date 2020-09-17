
window.addEventListener("load", function(){
   bindChoiceButton(handleChoice);
}, false);


function handleChoice(id){
    const choices = document.querySelectorAll("#btn1, #btn2, #btn3, #btn4, #btn5");
    choices.forEach(element => {
        if(id===element.id)
            element.setAttribute('style', 'background-color:#99ceff');
        else
            element.setAttribute('style', 'background-color:#e6f3ff');
    });

    let selected=document.querySelector("#keuze");
    let productId="p";
    productId=productId + id.substr(3,1);
    let choice=document.querySelector(`#${productId}`);
    selected.innerHTML=`Je hebt gekozen voor ${choice.innerHTML}`;
}

function bindChoiceButton(handler)
{
    const choices = document.querySelectorAll("#btn1, #btn2, #btn3, #btn4, #btn5");
    choices.forEach(element => element.addEventListener('click', event => {

        handler(element.id);
    }))
}


