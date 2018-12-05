(function(){
    "use strict";


// window.ENI = window.ENI || {};
//
// window.ENI.nb = 12;
// window.ENI.afficherValeur = function(val){
//     console.log(val);
// };

// $("#menu-principal").collapse("show");


$("#menu-principal").on("click","li",function () {
    $(this)
        .addClass("active")
    .siblings()
        .removeClass("active")
    .closest("#menu-principal")
        .collapse("hide")
    ;
});

$("#modal-form-connexion").on("hidden.bs.modal", (event) => {
    // $(event.currentTarget).find("input").val();
    // $(event.currentTarget).find("input").val("");
    // $(event.currentTarget).find("input").attr("value");
    // $(event.currentTarget).find("input").attr("value","");
    $(event.currentTarget).find("form")[0].reset();
    // event.currentTarget.querySelector("form").reset();
});

$("#form-connexion").on("submit", event => {
    event.preventDefault();
    let identifiant = $("#identifiant").val().trim();
    let motdepasse = $("#motdepasse").val().trim();
    if(identifiant === motdepasse){
        $("#modal-form-connexion").modal("hide");
    } else {
        alert("erreur");
    }
});

    let demo = new Vue({
        el: '#vuejs',
        data: {
            message: 'Ma première application VueJS !'
        }
    });


let clients = [{
    nom: "DUBOIS", prenom: "Marie", comptes: [{},{},{}]
},{
    nom: "DURAND", prenom: "Céline", comptes: [{}]
},{
    nom: "MOREAU", prenom: "Christophe"
},{
    nom: "PETIT", prenom: "Sébastien", comptes: [{},{}]
},{
    nom: "ROUX", prenom: "Aurélie"
},{
    nom: "AAA", prenom: "Aurélie"
},{
    nom: "BBB", prenom: "Aurélie"
},{
    nom: "CCC", prenom: "Aurélie"
},{
    nom: "DDD", prenom: "Aurélie"
},{
    nom: "EEE", prenom: "Aurélie"
},{
    nom: "FFF", prenom: "Aurélie"
},{
    nom: "GGG", prenom: "Aurélie"
},{
    nom: "HHH", prenom: "Aurélie"
},{
    nom: "III", prenom: "Aurélie"
},{
    nom: "JJJ", prenom: "Aurélie"
},{
    nom: "KKK", prenom: "Aurélie"
},{
    nom: "LLL", prenom: "Aurélie"
}];

let clientsData = {
    clients: clients,
    page: 1,
    max: 5
};

let clientsList = new Vue({
    el: "#clients-list",
    data: {
        clients: [],
        page: 1,
        max: 5
    },
    computed : {
        clientsPage: function(){
            return this.clients.slice(this.page*this.max,(this.page+1)*this.max);
        }
    },
    mounted: function(){
        fetchClients().then( (clients) => this.clients = clients );
    }
});

async function fetchClients(){
    // clientsData.clients =
    return await fetch('https://banque-api.azurewebsites.net/api/clients')
            .then(resp => resp.json());
}

var clientForm = new Vue({
    el: "#client-form",
    data: {
        client: {
            nom: "",
            prenom: ""
        }
    },
    computed: {
        nomComplet: function(){
            return this.client.prenom + ' ' + this.client.nom.toUpperCase();
        }
    },
    methods: {
        enregistrer: function () {
            clients.push(this.client);
            location = "#clients-list";
        }
    }
});

var entete = new Vue({
    el: "#entete",
    data: {
        hash: location.hash
    },
    methods: {
        navig: function (event) {
            if(event.target.tagName == 'A'){
                this.hash = event.target.hash;
                $("#menu-principal").collapse("hide");
            }
        }
    }
});







})();
