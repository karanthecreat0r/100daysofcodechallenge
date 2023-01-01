// Inventory Application for a Bookstore
// 1.title
// 2.author
// 3.ISBN
// 4.numCopies



//without class
// function Book(title, author, ISBN, numCopies) {
//     this.title = title
//     this.author = author
//     this.ISBN = ISBN
//     this.numCopies = numCopies

// }

// Book.prototype.getAvailability = function () {
//     if (this.numCopies === 0) {
//         return "Out of Stock  "    
//     }else if (this.numCopies < 10){
//         return "Low Stock"
//     }
//     return "Instock"
// }

// Book.prototype.sell = function (numCopieSold = 1) {
//     this.numCopies -= numCopieSold
// }

// Book.prototype.restock = function(numCopiesStocked = 5) {
//     this.numCopies += numCopiesStocked

// }

//creating class componenet

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);
