class Cat {
    constructor(image, title, label) {
        this.image = image;
        this.title = title;
        this.label = label;
    }
}

let catsList = [
    new Cat("images/catAngry.png", "Chaton fâché", "Aujourd'hui, faut pas pousser. Ni tirer. Rien."),
    new Cat("images/catGardening.png", "Chaton patte verte", "On soutient les nôtres, et on en prend soin!"),
    new Cat("images/catSleepy.png", "Chaton le sommeil", "Y a des semaines comme ça ..."),
    new Cat("images/catStylish.png", "Chaton stylé", "Tu serais pas tombé du ciel ? T'es plein d'étoiles, il t'en reste un peu, là."),
    new Cat("images/catWorkout.png", "Chaton motivé", "Un peu mais pas trop, juste le temps que le sommeil revienne ..."),
    new Cat("images/catWorking.png", "Chaton entrepreneur", "Il paraît que ces sachets de croquettes vont pas s'acheter tout seuls ..."),
]



// afficher / cacher le bloc des chats et le bouton //
function showHideElements() {
    let button = document.getElementById("chooseCat");
    let resultBloc = document.getElementById("resultBloc");
    let iconsBloc = document.getElementById("icons");

    if (button.style.display !== "none") {
        button.style.display = "none";
        resultBloc.style.display = "block";
    } else {
        button.style.display = "block";
        resultBloc.style.display = "none";
    }

    randomizerAnimation();

    setTimeout(function() {
        if (button.style.display !== "none") {
            iconsBloc.style.display = "none";
        } else {
            iconsBloc.style.display = "flex";
        }
    }, 1900);

}

// randomizer //
function randomizerAnimation() {
    let resultImage = document.getElementById("image");
    let hasard;
    let iteration = 0;

    let title = document.getElementById("title");
    let label = document.getElementById("label");

    let buttonsBloc = document.getElementById("icons");

    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            hasard = Math.floor(Math.random() * catsList.length);
            resultImage.src = catsList[hasard].image;
            iteration++;
            
            if (iteration === 10) {
                document.getElementById("image").style.width = "300px"; 
                document.getElementById("pop").play();

                title.textContent = catsList[hasard].title;
                label.textContent = catsList[hasard].label;
            }
        }, i * 200);
    }

} 