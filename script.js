const emojis = ["🤢","🤢","😎","😎","😭","😭","🤥","🤥","😵","😵","😨","😨","😡","😡","😇","😇","😋","😋","😈","😈"];
let shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);
let pairsFound = 0; // Variable pour suivre le nombre de paires trouvées

for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    document.querySelector('.game').appendChild(box);
    box.onclick = function () {
        this.classList.add('boxOpen');
        setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML === document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    pairsFound += 1; // Incrémente le nombre de paires trouvées

                    if (pairsFound === emojis.length / 2) { // Vérifie si toutes les paires ont été trouvées
                        document.querySelector('.victory').innerText = "🎉 Bravo ! C'est gagné 🎉"; // Affiche le message de victoire
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        }, 900);
    };
    document.querySelector('.game').appendChild(box);
};
