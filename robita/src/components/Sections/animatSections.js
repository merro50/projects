window.onscroll = function Animation(){
    let containerCard = document.querySelector('.price-cards'),
        cards = containerCard.querySelectorAll('.price-card'),
        sec2Img = document.getElementById('sec2Img'),
        sec2Text = document.getElementById('sec2Text'),
        sec2Img2 = document.getElementById('sec2Img2'),
        sec2Text2 = document.getElementById('sec2Text2');


        


        for(let i = 0;i< cards.length;i++){
             
            if(window.scrollY > 300){
                cards[i].style.setProperty("transform","rotatex(0deg)");
                cards[i].style.setProperty("opacity","1");
            }else{
                cards[i].style.setProperty("transform","rotatex(90deg)");
                cards[i].style.setProperty("opacity","0");
            }
    
        }

        if(window.scrollY > 1000){
            sec2Img2.style.setProperty("transform","translatey(0px)");
            sec2Img2.style.setProperty("opacity","1");
            sec2Text2.style.setProperty("transform","translatey(0px)");
            sec2Text2.style.setProperty("opacity","1");
        }else{
            sec2Img2.style.setProperty("transform","translatey(800px)");
            sec2Img2.style.setProperty("opacity","0");
            sec2Text2.style.setProperty("transform","translatey(500px)");
            sec2Text2.style.setProperty("opacity","0");
        }

        if(window.scrollY > 600){
           sec2Img.style.setProperty("transform","translatex(0px)");
           sec2Img.style.setProperty("opacity","1");
           sec2Text.style.setProperty("transform","translatey(0px)");
           sec2Text.style.setProperty("opacity","1");
        }else{
           sec2Img.style.setProperty("transform","translatex(800px)");
           sec2Img.style.setProperty("opacity","0");
           sec2Text.style.setProperty("transform","translatey(500px)");
           sec2Text.style.setProperty("opacity","0");
        }
}