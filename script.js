// jeu du morpion

const caseMorpion = document.querySelectorAll('.caseMorpion');

const case1 = caseMorpion[0];
const case2 = caseMorpion[1];
const case3 = caseMorpion[2];
const case4 = caseMorpion[3];
const case5 = caseMorpion[4];
const case6 = caseMorpion[5];
const case7 = caseMorpion[6];
const case8 = caseMorpion[7];
const case9 = caseMorpion[8];

console.log(caseMorpion);

let j = 1;
let egalite = 0;

caseMorpion.forEach((element) => {
    element.addEventListener('click', () => {
        if (!element.classList.contains('croix') && !element.classList.contains('rond')) {
            if (j === 1) {
                element.classList.add("croix");
                j = j * -1;
            } else if (j === -1) {
                element.classList.add("rond");
                j = j * -1;
            }
            winCheck();
            egalite++;
            egalitcheck();
        }
    });
});

// Affiche une popup personnalisée avec un message
function showPopup(message) {
    const popup = document.getElementById("popupWin");
    const messageEl = document.getElementById("messageWin");
    messageEl.textContent = message;
    popup.style.display = "flex";
}

// Vérifie les combinaisons gagnantes
function winCheck() {
    if (case1.classList.contains('croix') && case2.classList.contains('croix') && case3.classList.contains('croix')) {
        setTimeout(() => {
            showPopup("Le joueur ❌ a gagné !");
        }, 100);
    } else if (case1.classList.contains('croix') && case4.classList.contains('croix') && case7.classList.contains('croix')) {
        setTimeout(() => {
            showPopup("Le joueur ❌ a gagné !");
        }, 100);
    } else if (case2.classList.contains('croix') && case5.classList.contains('croix') && case8.classList.contains('croix')) {
        setTimeout(() => {
            showPopup("Le joueur ❌ a gagné !");
        }, 100);
    } else if (case3.classList.contains('croix') && case6.classList.contains('croix') && case9.classList.contains('croix')) {
        setTimeout(() => {
            showPopup("Le joueur ❌ a gagné !");
        }, 100);
    } else if (case4.classList.contains('croix') && case5.classList.contains('croix') && case6.classList.contains('croix')) {
        setTimeout(() => {
            showPopup("Le joueur ❌ a gagné !");
        }, 100);
    } else if (case7.classList.contains('croix') && case8.classList.contains('croix') && case9.classList.contains('croix')) {
        setTimeout(() => {
            showPopup("Le joueur ❌ a gagné !");
        }, 100);
    } else if (case1.classList.contains('croix') && case5.classList.contains('croix') && case9.classList.contains('croix')) {
        setTimeout(() => {
            showPopup("Le joueur ❌ a gagné !");
        }, 100);
    } else if (case3.classList.contains('croix') && case5.classList.contains('croix') && case7.classList.contains('croix')) {
        setTimeout(() => {
            showPopup("Le joueur ❌ a gagné !");
        }, 100);
    }

    // rond
    else if (case1.classList.contains('rond') && case2.classList.contains('rond') && case3.classList.contains('rond')) {
        setTimeout(() => {
            showPopup("Le joueur ○ a gagné !");
        }, 100);
    } else if (case1.classList.contains('rond') && case4.classList.contains('rond') && case7.classList.contains('rond')) {
        setTimeout(() => {
            showPopup("Le joueur ○ a gagné !");
        }, 100);
    } else if (case2.classList.contains('rond') && case5.classList.contains('rond') && case8.classList.contains('rond')) {
        setTimeout(() => {
            showPopup("Le joueur ○ a gagné !");
        }, 100);
    } else if (case3.classList.contains('rond') && case6.classList.contains('rond') && case9.classList.contains('rond')) {
        setTimeout(() => {
            showPopup("Le joueur ○ a gagné !");
        }, 100);
    } else if (case4.classList.contains('rond') && case5.classList.contains('rond') && case6.classList.contains('rond')) {
        setTimeout(() => {
            showPopup("Le joueur ○ a gagné !");
        }, 100);
    } else if (case7.classList.contains('rond') && case8.classList.contains('rond') && case9.classList.contains('rond')) {
        setTimeout(() => {
            showPopup("Le joueur ○ a gagné !");
        }, 100);
    } else if (case1.classList.contains('rond') && case5.classList.contains('rond') && case9.classList.contains('rond')) {
        setTimeout(() => {
            showPopup("Le joueur ○ a gagné !");
        }, 100);
    } else if (case3.classList.contains('rond') && case5.classList.contains('rond') && case7.classList.contains('rond')) {
        setTimeout(() => {
            showPopup("Le joueur ○ a gagné !");
        }, 100);
    }
}

// Vérifie l’égalité
function egalitcheck() {
    if (egalite === 9) {
        setTimeout(() => {
            showPopup("Égalité !");
        }, 100);
    }
}

document.getElementById("rejouerBtn").addEventListener("click", resetGame);

function resetGame() {
    caseMorpion.forEach(element => {
        element.classList.remove('croix', 'rond');
    });
    j = 1;
    egalite = 0;
    document.getElementById("popupWin").style.display = "none";
}