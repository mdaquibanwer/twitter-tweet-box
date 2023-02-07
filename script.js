const editableInput = document.querySelector(".editable"),
readOnlyInput = document.querySelector(".readonly"),
placeholder = document.querySelector(".placeholder"),
counter = document.querySelector(".counter"),
button = document.querySelector("button");

const checkInput = (element)=>{
    let currentLength =  element.innerText.length;
    let counterLength = 200;
    let textTag = element.innerHTML;
    if(currentLength<=0){    
        placeholder.style.display = "block";
        counter.style.display = "none";
        button.classList.remove("active");
    }else{
        placeholder.style.display = "none";
        counter.style.display = "block";
        button.classList.add("active");
    }
    counter.innerText = counterLength-currentLength;
    if(currentLength>counterLength){
        let overText = element.innerText.substr(counterLength); // substr() method extracts part of the string , beginning at the character at the specified number of character;
        // console.log(overText);
        overText = `<span class="highlightText">${overText}</span>`;
        textTag = element.innerText.substr(0,counterLength) + overText;
        readOnlyInput.style.zIndex = "1";
        counter.style.color = "#e0245e";
        button.classList.remove("active");
    }else{
        readOnlyInput.style.zIndex = "-1";
        counter.style.color = "#333";
    }
    readOnlyInput.innerHTML = textTag;
}
editableInput.onkeyup = (e)=>{
    let element = e.target;
    checkInput(element);
}
editableInput.onkeypress = (e)=>{
    let element = e.target;
    checkInput(element);
    placeholder.style.display = "none";
}
