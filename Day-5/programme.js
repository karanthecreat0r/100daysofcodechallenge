//New Implementation
function addFavoriteBook(bookName){
    //! -dosen't include Opposite Or Fliping
    //if statement desition logic
    if (!bookName.includes("Great")) {
        //pushing everything in favoriteBooks array
        favoriteBooks.push(bookName)
    }
}

function printFavoritBooks() {
    console.log(
        //``Template literals are Back tick a kind of string, include the value inside another string
        //$ add the value or drop the value inside, the {} is expression or length
        `Favorite Books:${favoriteBooks.length}`
    )
    // the special for loop which will iterate all the index
    for (let bookName of favoriteBooks) {
        console.log(bookName);
console.log(bookName);
    }
}
//individual array creation added by addFavoriteBook function
var favoriteBooks = [];

// code starts here
addFavoriteBook("A Song of Ice & Fire")
addFavoriteBook("The Great Miller")
addFavoriteBook("Crime & Punishment")
addFavoriteBook("Great Expectations")
addFavoriteBook("You Don't Know JS")

printFavoritBooks();
