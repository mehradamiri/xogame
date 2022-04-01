let trn = 1 ;
let img = "asset/img/x.png"
var cunt = [] ;
reset();

function nextTrn() {
    if(trn == 1){
        trn = 2;
        img = "asset/img/x.png"
    }else{
        trn = 1;
        img = "asset/img/o.png"
    }
}
function clickxo(clicked_id){
let w =0;
let idx = 0;
if(clicked_id=='B1')idx = 0;
if(clicked_id=='B2')idx = 1;
if(clicked_id=='B3')idx = 2;
if(clicked_id=='B4')idx = 3;
if(clicked_id=='B5')idx = 4;
if(clicked_id=='B6')idx = 5;
if(clicked_id=='B7')idx = 6;
if(clicked_id=='B8')idx = 7;
if(clicked_id=='B9')idx = 8;
    if(cunt[idx]== 0){
        nextTrn();
         document.getElementById(clicked_id).src = img ;
        cunt[idx] = trn;
    w=machWin();
   if(w==10){
   nextTrn()
   if(trn== 1)j="X"
   else j="O"
     document.getElementById("htext").innerHTML = j + " win" ;
   }
   
    }
    
}
function reset(){
    trn = 1 ;
    img = "asset/img/x.png";
    for (let index = 0; index < 9; index++) {
        cunt[index] = 0;
    }
}
function machWin(){
    var sc = 0 ;
    // 0 1 2
    // 3 4 5
    // 6 7 8
    if (cunt[0] == cunt[1] && cunt[0] == cunt[2] && cunt[0] != 0)sc = 10 ;
    if (cunt[3] == cunt[4] && cunt[3] == cunt[5] && cunt[3] != 0)sc = 10 ;
    if (cunt[6] == cunt[7] && cunt[6] == cunt[8] && cunt[6] != 0)sc = 10 ;
    if (cunt[0] == cunt[3] && cunt[0] == cunt[6] && cunt[0] != 0)sc = 10 ;
    if (cunt[1] == cunt[4] && cunt[1] == cunt[7] && cunt[1] != 0)sc = 10 ;
    if (cunt[2] == cunt[5] && cunt[2] == cunt[8] && cunt[2] != 0)sc = 10 ;
    if (cunt[0] == cunt[4] && cunt[0] == cunt[8] && cunt[0] != 0)sc = 10 ;
    if (cunt[2] == cunt[4] && cunt[2] == cunt[6] && cunt[2] != 0)sc = 10 ;
    
return sc;
}
