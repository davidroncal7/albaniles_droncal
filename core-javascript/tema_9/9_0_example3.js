
function book (from, to) {
  this.from = from
  this.to = to
}

book.prototype = {
  [Symbol.iterator]: function*() {
        console.log("suerte");
        yield "suerte";
    }
}

// let book2 = {

//     prototype: {
//         [Symbol.iterator]() {
//             let next = Math.ceil(1);
//             let last = 10;
//             return {
//                 next(){
//                     return (next <= last) ? {value: next++}: {done: true};
//                 },

//                 [Symbol.iterator]() {return this;}
//             };
//         },
//     }
// }

let book2 = {

    n: 0,
    next: function(){
        this.n += 10;
        return {value:this.n, done:false};
    },

};

let a = new book()


module.exports = {
    book,
    book2,
}