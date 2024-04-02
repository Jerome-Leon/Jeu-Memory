const emojis = ["🤢","🤢","😎","😎","😭","😭","🤥","🤥","😵","😵","😨","😨","😡","😡","😇","😇","😋","😋","😈","😈"];
let shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);
let pairsFound = 0; // Variable pour suivre le nombre de paires trouvées
let isProcessing = false; // Variable pour suivre l'état de l'animation

for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    document.querySelector('.game').appendChild(box);
    box.onclick = function () {
        if (isProcessing) return; // Sortir de la fonction si une animation est en cours
        if (this.classList.contains('boxOpen')) return; // Sortir si la carte est déjà retournée

        this.classList.add('boxOpen');
        if (document.querySelectorAll('.boxOpen').length > 1) {
            isProcessing = true; // Définir l'état en cours d'animation

            setTimeout(function () {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML === document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    pairsFound += 1; // Incrémente le nombre de paires trouvées

                    if (pairsFound === emojis.length / 2) { // Vérifie si toutes les paires ont été trouvées
                        const victoryMessage = document.querySelector('.victory');
                        victoryMessage.innerText = "🎉 Bravo ! C'est gagné 🎉"; // Affiche le message de victoire
                        victoryMessage.classList.add('scale'); // Ajoute la classe pour l'animation de mise à l'échelle

                        setTimeout(() => {
                            victoryMessage.classList.remove('scale'); // Retire la classe après l'animation
                        }, 4000); // Temps de l'animation
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
                isProcessing = false; // Met fin à l'animation en cours
            }, 900);
        }
    };
    document.querySelector('.game').appendChild(box);
};
