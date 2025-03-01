export function displayDialogue(text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogueUI.style.display = "block";

    let index = 0;
    let currentText = "";
    let interval = setInterval(() => {
        if(index < text.length){
            currentText += text[index];
            dialogue.innerHTML = currentText;
            index++;
            return;
        }
        clearInterval(interval);
    }, 25);

    const closeBtn = document.getElementById("close");

    function onCloseBtnClick(){
        onDisplayEnd(); 
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(interval);
        closeBtn.removeEventListener("click", onCloseBtnClick);
    }

    closeBtn.addEventListener("click", onCloseBtnClick);
}



export function setCamScale(k){
    const resizeFactor = k.width() / k.height();
    if(resizeFactor < 1){
        k.camScale(k.vec2(1));
        return;
    }

    k.camScale(k.vec2(1.5));
}