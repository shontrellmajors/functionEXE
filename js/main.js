/*The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

function tellFortune (jobTitle, geoLocation, partnerName, numberOfKids) {
    console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " numberOfKids + " kids.")
}

tellFortune(teacher, Nashville, James, 2);
tellFortune(dancer, Nashville, Damon, 2);
tellFortune(doctor, Nashville, Bill, 3);