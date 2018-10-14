/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Création Contact
var contact = {
    // initialise le contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
 
decribe: function () {
        var contacts = this.nom + " " + this.prenom;
        return contacts;
    }
};
 
// Création du tableau contenant les contacts
var contacts=[];
  
//création des 2 premiers contacts
var contactOne = Object.create(contact);
contactOne.init("Lévisse", "Carole");
 
var contactTwo = Object.create(contact);
contactTwo.init("Nelsonne", "Mélodie");
  
//push contacts
contacts.push(contactOne);
contacts.push(contactTwo);
var pushContact = Object.create(contact);

// Création du tableau d'options
var option = ["1 : Liste des contacts", "2 : Ajouter un contact", "0 : Quitter"];

console.log ("Bienvenue dans le gestionnaire de contacts !");


do{
    console . log ( "1: Lister les contacts");
    console . log ( "2: Ajouter un contact");
    console . log ( "0: Quitter");
    var saisieOption = Number(prompt("Choisissez une option :"));
    switch (saisieOption) {
  
        case 1:
            for (var i = 0; i < contacts.length; i++) {
            console.log("Nom : " + contacts[i].nom +" - Prénom : " + contacts[i].prenom);
        };
        console.log("");
        break;
        case 2:
            var nom = prompt("Entrez le nom de la personne");
            var prenom = prompt("Entrez le prenom de la personne");
            var nomContact = "contact" + contacts.length;
            nomContact = Object.create(contact);
            nomContact.init(nom, prenom);
            contacts.push(nomContact);
            console.log("Le contact a bien été ajouté !");
            break;
        case 0:
            console.log("Au revoir !");
            break;
        }
}
while (saisieOption !== 0) {
    for (var i = 0; i < option.length; i++) {
        console.log(option[i]);
    }
};
