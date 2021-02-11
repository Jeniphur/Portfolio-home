var text = ['UX/UI Designer', 'Artist', 'Food Lover', 'INFJ', 'Casual Baker']; 
function callMe(){
    var myText = document.getElementById('iAm'); 
    var curIdx = text.indexOf(myText.innerHTML); 
    myText.innerHTML = text[(curIdx+1)%text.length];
}

setInterval(callMe,1100);