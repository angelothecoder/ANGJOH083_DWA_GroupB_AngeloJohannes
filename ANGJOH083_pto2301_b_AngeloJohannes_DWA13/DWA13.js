const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free state'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

//Use forEach to console log each name to the console.
names.forEach((n) =>{
    console.log(n)
});

//linebreak
console.log('\n');

//Use forEach to console log each name with a matching province, for example Ashwin (Western Cape).
names.forEach((n,i) =>{
    console.log(n + '(' + provinces[i] + ')')
});

//linebreak
console.log('\n');

//Using map loop over all province names and turn the string to all uppercase.
function UpperCase(word){
    return word.toUpperCase()
};

console.log(provinces.map(UpperCase));

//linebreak
console.log('\n');

//Create a new array with map that has the amount of characters in each name. 
function AmountOfCharacters(word){
    return word.length
};

console.log(names.map(AmountOfCharacters));

//linebreak
console.log('\n');

//Using toSorted to sort all provinces alphabetically.
console.log(provinces.toSorted())

//linebreak
console.log('\n')

//Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left.
function FilterWord(word){
    if (word.includes("Cape") === false){
        return word
    }
};

console.log(provinces.filter(FilterWord).length);

//linebreak
console.log('\n');

//Create a boolean array by using map and some to determine whether a name contains an S character. 

function checkForCharacter(word){
    return word.includes("s")
};

console.log(provinces.map(checkForCharacter));

//linebreak
console.log("\n");

//Products
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

//Use forEach to console.log each product name to the console.
products.forEach((n) =>{
    console.log(n.product)
});

//linebreak
console.log('\n');

//Use filter to filter out products that have a name longer than 5 characters
function FilterLength(word){
        return products.product
    };

console.log(products.filter(FilterLength));

//linebreak
console.log('\n');

