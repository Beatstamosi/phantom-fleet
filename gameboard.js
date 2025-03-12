import Ship from "./classShip";

export default class Gameboard {
    constructor() {
        this.board = this.createBoardArray();
    }

    createBoardArray() {
        const board = [];

        for (let i = 0; i < 10; i++) {
            board[i] = [];

            for (let j = 0; j < 10; j++) {
                board[i][j] = new Field();
            }
        }

        return board;
    }

    placeShip(x, y, direction, length) {
        if (x < 0 || x > 9 || y < 0 || y > 9) throw Error("Coordinates must be from 0 - 9");

        if ((x + (length - 1)) > 9  || (y + (length - 1)) > 9) throw Error("Coordinates must stay in range of gameboard ((starting coordinates + length) < 9)");

        if (!this.checkShipAlreadyPlaced(x, y, direction, length)) throw Error("A ship has already been placed in this spot");

        let newShip = new Ship(length);

        for (let i = 0; i < length; i++) {
            let currentField = this.getField(x, y, direction, i);
            currentField.ship = newShip;
        }
    }

    checkShipAlreadyPlaced(x, y, direction, length) {
        for (let i = 0; i < length; i++) {
            let currentField = this.getField(x, y, direction, i);
            if (currentField.ship != null) return false;
        }

        return true;
    }

    getField(x, y, direction, i) {
        return direction === "horizontal" ? this.board[x + i][y] : this.board[x][y + i];
    }

    receiveAttack(x, y) {
        
    }

// receive Attack
    // param: coordinates
    // access board array
        // if field has ship
            // call ship.hit()
            // set field.hit = true
        // else
            // set field.missed = false


// all Ships sunk
    // array 
    // placeShip adds new Ship to array
    // return if all ship.sunk === true


}

class Field {
    constructor() {
        this.missed = false;
        this.hit = false;
        this.ship = null;
    }
}









