$(document).ready(function() {
    path = '/media/cressources/'; // Chemin vers le dossier contenant les images
    dest = '#carrousel'; // ID de la div où sera affiché le carrousel
    //var images = new Array();
    // // Requête Ajax pour récupérer les images
    // $.ajax({
    //     //L'URL de la requête 
    //     url: path + "list.php",

    //     //La méthode d'envoi
    //     method: "POST",

    //     //Le format de réponse attendu
    //     dataType : "json",
    // })
    // //Ce code sera exécuté en cas de succès de la requête
    // .done(function(response){
    //     let data = JSON.stringify(response);
    //     images = JSON.parse(data);
    //     console.log(images);
    // });
    var images = [
        "IMG-0759.webp",
        "IMG-0784.webp",
        "IMG-0785.webp",
        "IMG-0786.webp"
    ];
    var i = 0;
    function run(tab) {
        console.log(tab[i]);
        $(dest).css('background-image', 'url(' + path + tab[i] + ')');
        i = (i + 1) % tab.length;
    }
    run(images);
    setInterval(run, 5000, images);
});