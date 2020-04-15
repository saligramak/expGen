var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    try {
        var nxtExp = genNextExp();
        var expList = new Array(18);
        var expInd = 1;
        for(expInd = 0; expInd < 18; expInd++) {
            expList[expInd] = genNextExp();
        }
    var locals = {title:'Generate Expression', expListLoc: expList};
    res.render('expression', locals);
    }
    catch(err) {
      res.send('Exception generating expressions: ' + err.message);
    }
  
  });
  
module.exports = router;

function genNextExp(){
    var nxtRnd = 0, nxtOper = 0;
    var nxtExp = '';
    var parenOn = false;
    for(termInd = 0; termInd < 8; termInd++) {
        nxtRnd = Math.ceil(Math.random()*10.0);
        nxtExp += nxtRnd.toString();

        if(termInd<7) {
            //Add operator
            nxtOper = Math.ceil(Math.random()*3);
            switch(nxtOper) {
                case 1:     //Add parentheseis
                if(parenOn)     //if parenthesis already open
                nxtExp += ")*";
                else
                nxtExp += "*(";
                parenOn = !parenOn;
                break;
                case 2:     //Add + operator
                nxtExp += "+";
                break;
                case 3:     //Add - operator
                nxtExp += "-";
                break;
            }
        }
    }
    if(parenOn) {
        nxtExp += ")";
    }
    return nxtExp;
}