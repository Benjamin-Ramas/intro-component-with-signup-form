document.querySelector("#submit-button").addEventListener("click", onSubmit);

const firstNameInput = document.querySelector("#first-name-input");

function onSubmit(){
    let slides = document.getElementsByClassName("fill-out-input");

    for (var i = 0; i < slides.length; i++) {
        const input = slides[i].querySelector('input')

        let valid = input.value != '';

        if(input.type == 'email' && !input.validity.valid){
            valid = false;
        }

        if(valid){
            slides[i].classList.add("valid-input");
        }else{
            slides[i].classList.remove("valid-input");
        }
    }
}