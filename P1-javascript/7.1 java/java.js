function geld(){
    
    let budget = 75;
    let product = 60;
    
    
    if( budget > product){
        document.getElementById("tekst1").style.color = "green";
        document.getElementById("tekst1").innerHTML="Je hebt genoeg geld!";
    }
    else{ 
        document.getElementById("tekst1").style.color = "red";
        document.getElementById("tekst1").innerHTML="Jammer je hebt te weinig geld";
    }

}