function chkAns(event) {
    var expAnsElem = document.getElementById(event.target.id);
    var ans = (expAnsElem.value === JSON.stringify(eval(expAnsElem.labels[0].innerText)));

   resetAnsBoxClass(expAnsElem);     //remove all style classes

    if(ans) {
            expAnsElem.classList.add('correct');
    }
    else {
        if(expAnsElem.value == '') {
            expAnsElem.classList.add('clear');
        }
        else {
            expAnsElem.classList.add('wrong');
        }
    }
    return;
}

function refreshExpList(event) {
    fetch('/genNewExpList').then(response => response.json())
    .then(data => {
      updateExpList(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
function updateExpList(respList) {
    var divInd = 0;
    var divList = document.getElementsByClassName('expCell');
    for(let divEl of divList) {
        divEl.children[0].textContent = respList[divInd];
        resetAnsBoxClass(divEl.children[1]);
        divEl.children[1].classList.add('clear');
        divEl.children[1].value = '';
        divInd++;
    };
}

function resetAnsBoxClass(expAnsElem) {
    if(expAnsElem.classList.contains('clear')) {
        expAnsElem.classList.remove('clear');
    }
    else if(expAnsElem.classList.contains('wrong')) {
        expAnsElem.classList.remove('wrong');
    }
    else if(expAnsElem.classList.contains('correct')) {
        expAnsElem.classList.remove('correct');
    }
}