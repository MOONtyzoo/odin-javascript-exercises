const getAge = function(person) {
    let yearOfBirth = person.yearOfBirth
    let yearOfDeath = person.yearOfDeath
    if (yearOfDeath == undefined) {
        let currentDate = new Date(Date.now())
        yearOfDeath = currentDate.getFullYear()
        console.log(yearOfDeath)
    }
    
    let age = yearOfDeath - yearOfBirth
    return age
}

const biggestNumber = function(acc, num) {
    if (num > acc) { acc = num }
    return acc;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let oldestAge = getAge(oldest)
        let thisAge = getAge(person)
        if (thisAge > oldestAge) {oldest = person}
        return oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
