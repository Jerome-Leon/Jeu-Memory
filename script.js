
const emojis = ["🤢","🤢","😎","😎","😭","😭","🤥","🤥","😵","😵","😨","😨","😡","😡","😇","😇","😋","😋","😈","😈"];
let shuf_emojis = emojis.sort(()=>(Math.random() > 0.5) ? 2 : -1);
const message = document.querySelector('.victory');

for(var i=0; i<emojis.length;i++){
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    document.querySelector('.game').appendChild(box);
    box.onclick = function(){
        this.classList.add('boxOpen')
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
                if(document.querySelectorAll('.boxOpen')[0].innerHTML===document.querySelectorAll('.boxOpen')[1].innerHTML){
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                    message.innerText ='👍 Bien joué! 👍';
                    setTimeout(() => {
                        message.innerText = '';
                    }, 4000);

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    

                    if(document.querySelectorAll('.boxMatch').length===emojis.length){
                        message.innerText = "👏 Bravo! C'est gagné 👏";
                    };
                }else{
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                };
            }
        },900);
    };
    document.querySelector('.game').appendChild(box);
};