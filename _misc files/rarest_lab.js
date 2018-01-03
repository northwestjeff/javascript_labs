
var namesToAges = {
    'Alyssa': 22,
    'Charley': 25,
    'Dan': 25,
    'Jeff': 20,
    'Kasey': 20,
    'Kim': 20,
    'Morgan': 25,
    'Ryan': 25,
    'Stef': 22
};

var occurrence = {};

function countValues(nameToAges, occurrence) {
    for (i in nameToAges) {
        if (nameToAges[i] in occurrence) {
            occurrence[nameToAges[i]] += 1
        } else {
            occurrence[nameToAges[i]] = 1
        }
    }
    // console.log(occurrence)
}

var rarestAge = Number.POSITIVE_INFINITY
var rarestAgeOccurrence = Number.POSITIVE_INFINITY

function findRarestValue(occurrence, rarestAge, rarestAgeOccurrence) {
    for (i in occurrence) {
        // console.log(i)
        // console.log(occurrence[i])
        if (occurrence[i] < rarestAgeOccurrence) {
            rarestAge = i
            rarestAgeOccurrence = occurrence[i]
        }
    }
    console.log("The rarest age is " + rarestAge + ", which occurs " + rarestAgeOccurrence+  " times. ")
}


countValues(namesToAges, occurrence)
findRarestValue(occurrence, rarestAge, rarestAgeOccurrence)

// console.log("The rarest age is " + rarestAge + ", which occurs " + rarestAgeOccurrence+  " times. ")

// key['value'] = 'text'
