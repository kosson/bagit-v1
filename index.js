require('dotenv').config();
const fsPromises = require(`fs`).promises;
const path = require(`path`);


// https://www.npmjs.com/package/directory-tree -> Creezi un obiect JS dintr-un director.

/**
 * Clasa creează un obiect al cărui metode pot fi folosite pentru a crea Bag-uri și a le modifica
 */
class BagIt {
    constructor (user, dir) {
        this._version = '1.0';
        this._tagFileCharEnc = 'UTF8';
        this.user = user;
        this.dir = dir;

        // verifică dacă directorul există
        // this.dirE = 
        fs.access(this.dir, fs.F_OK, function(err) {
            if (!err) {
                // Do something
            } else {
                // It isn't accessible
            }
        });
    }

    /**
     * `_genrateBagitTXT()` este un utilitar intern, care trebuie apelat
     * în cazul în care bag-ul nu există pentru a fi creat fișierul `bagit.txt`
     * Dacă directorul deja există, nu va mai fi apelat. Se va citi fișierul.
     */
    static _generateBagitTXT () {
        // TODO: scrie fișierul bagit.txt
    }

    /**
     * creează un director temporar în care va fi pus payload-ul
     */
    createTempDataDir () {

    }
}