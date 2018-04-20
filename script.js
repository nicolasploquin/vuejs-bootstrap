(function(){
    "use strict";



$("#menu-principal a").click(function () {
    $("#menu-principal").collapse("hide");
});


var clients = [{
    nom: "DUBOIS", prenom: "Marie", comptes: 3
},{
    nom: "DURAND", prenom: "Céline", comptes: 1
},{
    nom: "MOREAU", prenom: "Christophe"
},{
    nom: "PETIT", prenom: "Sébastien", comptes:  2
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

var demo = new Vue({
    el: '#vuejs',
    data: {
        message: 'Ma première application VueJS !'
    }
});

var clientsList = new Vue({
    el: "#clients-list",
    data: {
        clients: clients,
        page: 1,
        max: 7
    },
    computed : {
        clientsPage: function(){
            return this.clients.slice(this.page*this.max,(this.page+1)*this.max);
        }
    }

});

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
            console.dir(event);
            if(event.target.tagName == 'A'){
                this.hash = event.target.hash;
            }
        }
    }
});







})();
