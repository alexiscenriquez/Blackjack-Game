let experience = ['What Are You Doing', {
    Name: "Alexis Enriquez",
    Education: "University of Houston",
    Experiences: "Cashier,Life and Heath Insurance,Sales,Sales Associate",
    Licenses: "Life and Health Insurance",
    Skills: "Java, JavaScript, HTML, CSS",

}]


console.log(experience);
console.log(experience[0]);
console.log(experience[1])

let aboutMe = ["Alexis Enriquez", 23, true]

let messages = [{
    Name: "Alexis Enriquez",
    Message: "Waddup",
},
{
    Name: "Shahryar Ramezani",
    Messages: "Nothing Much, I miss you",
},
{
    Name: "Ali dlfjasdlfj",
    Messages: "OMG guys, not in the group chat",
}
]

messages.push({ Name: "lsdfjadljf", Messages: "afdaedfdf" })


for (let i = 0; i < messages.length; i++) {
    console.log(messages[i])
}

let greetingEl = document.getElementById("greeting-el");
let sentence = ["Hello ", "my ", "name ", "is ", "Alexis"];

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i]

}


let prices = [9.6, 4.50, 4, 1.25, 0.75]
let lowestPrice;
for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length - 1; j++) {
        if (prices[i] < prices[j]) {
            lowestPrice = prices[i]
        }
        else {
            if (lowestPrice >= prices[j]) {
                lowestPrice = prices[j]
            }
        }

    }
}

console.log(lowestPrice)