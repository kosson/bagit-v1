const fs   = require(`fs`);
const path = require(`path`);

class BagIt {
    constructor (payload) {
        this.payload = payload;
    }

    createBagitTXT () {
        // TODO: scrie fișierul bagit.txt
    }

    /**
     * creează un director temporar în care va fi pus payload-ul
     */
    createTempDataDir () {

    }
}