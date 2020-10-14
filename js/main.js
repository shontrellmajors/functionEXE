/*The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

function tellFortune (jobTitle, geoLocation, partnerName, numberOfKids) {
    console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " numberOfKids + " kids.")
}

tellFortune(teacher, Nashville, James, 2);
tellFortune(dancer, Nashville, Damon, 2);
tellFortune(doctor, Nashville, Bill, 3);
*/


You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge (age) {
    let dogYears = age * 7; 
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(5);
calculateDogAge(2);
calculateDogAge(1);
