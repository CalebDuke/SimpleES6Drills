let favMovie = (movie = "The Room", name = "World") => console.log(`My name is ${name} my fave movie is ${movie}`);

favMovie();

let fullName = 'Caleb Duke'
let name = 'Jeremy Peters'

getFirstName = () => {
    (
        console.log(fullName.split(' ')[0])
    )
};

getFirstName();

getLastNameConcise = () => console.log(name.split(' ')[0])

getLastNameConcise();


newFunction = (x, y) => {
    return {
        resultExp: x ** y,
        resultProd: x * y
    }
};

console.log(newFunction(4, 5));


let arr = ["Paul", "Birmingham", "Fried Chicken"]

aboutSomeone = (name, location, favFood) => {
    console.log(`${name} ${location} ${favFood}`)
};
aboutSomeone(...arr);


myName = (identity) => {
    
    for (i = 0; i < 10; i++) {
        // console.log(locationName[i % locationName.length])
        var h3 = $("<h3></h3>")
        $('body').append(h3);
        h3.append(`Accusation ${i}`)
        h3.click(clickHandler(i));
    }

}

myName

let identity = "Caleb Duke";

let whatEver = (param) => {
    let spreadName = [...param]

    for (i=0; i < param.length; i++) {
        console.log(spreadName[i])
    }
}
whatEver(identity);







