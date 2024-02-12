
function showHideDiv(RadioChecked){
    var divShowHide=document.getElementById("DivToShowHide")

    if (document.getElementById("Rescard").checked) {
        DivToShowHideOther.style.display="none"
        divShowHide.style.display="block"
        document.getElementById("primarycardnow").innerHTML=RadioChecked.value   
    }
    else if(document.getElementById("Dricard").checked){
        DivToShowHideOther.style.display="none"
        divShowHide.style.display="block"
        document.getElementById("primarycardnow").innerHTML=RadioChecked.value
    }
    else if(document.getElementById("Passport").checked){
        DivToShowHideOther.style.display="none"
        divShowHide.style.display="block"
        document.getElementById("primarycardnow").innerHTML=RadioChecked.value
    }
    else if(document.getElementById("Other").checked){
        DivToShowHideOther.style.display="block"
        divShowHide.style.display="block"
        document.getElementById("primarycardnow").innerHTML=RadioChecked.value
    }
}
