function chkAns(event) {
    var expAnsElem = document.getElementById(event.target.id);
    var ans = (eval(expAnsElem.value) === eval(expAnsElem.labels[0].innerText));
    if(expAnsElem.classList.contains('clear')) {
        expAnsElem.classList.remove('clear');
    }
    else if(expAnsElem.classList.contains('wrong')) {
        expAnsElem.classList.remove('wrong');
    }
    else if(expAnsElem.classList.contains('correct')) {
        expAnsElem.classList.remove('correct');
    }

    //if(expAnsElem.value == ans) {
    if(ans) {
            expAnsElem.classList.add('correct');
        //expAnsElem.style.backgroundColor = '#0f0';
    }
    else {
        if(expAnsElem.value == '') {
            expAnsElem.classList.add('clear');
        }
        else {
            expAnsElem.classList.add('wrong');
        }
        //expAnsElem.style.backgroundColor = '#f00';
    }
    return;
}