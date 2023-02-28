const colors = ['#063c77', '#f19648', '#f5d259', '#d84f35']



let cities = [
    {
        name: 'Paris',
        superficy: 104.5,
        population: 10858874
    },
    {
        name: 'Londres',
        superficy: 1572,
        population: 8908081
    },
    {
        name: 'Madrid',
        superficy: 608,
        population: 3280782
    },
    {
        name: 'Lisbonne',
        superficy: 100.05,
        population: 509515
    },
    {
        name: 'Rome',
        superficy: 2213,
        population: 2844395
    },
    {
        name: 'Berlin',
        superficy: 891.7,
        population: 3748148
    },
    {
        name: 'Moscou',
        superficy: 2542,
        population: 12655050
    },
    {
        name: 'Varsovie',
        superficy: 546,
        population: 1793579
    },
    {
        name: 'Copenhqgue',
        superficy: 292,
        population: 1345562
    },
    {
        name: 'Dublin',
        superficy: 318,
        population: 1173179
    }
]

// logger la population de Moscou!

export default function main(stage) {
    let total = 0;
    for (let i=0; i < cities.length; i+=1) {
        total += cities[i].population;
    }
 console.log(total);

    let smallestCity = cities[0];
    for (let i=0; i < cities.length; i+=1) {
        if (cities[i].population < smallestCity.population) {
            smallestCity = cities[i];
        }
    }
    console.log(smallestCity.name);

    
  
    let moyenne = total/cities.length;

    console.log(Math.round(moyenne));

    let bigCities =[];

    for (let j=0; j < cities.length; j += 1) {
        if (cities[j].population>moyenne){
            bigCities.push(cities[j])
        }
    }
    console.log(bigCities)


    let totalarea = 0
    for (let i=0; i < cities.length; i+=1) {
        totalarea += cities[i].superficy;
    }
    let meanarea = totalarea/cities.length;

    console.log(meanarea);

    let wideCities =[];

    for (let i=0; i<cities.length; i +=1) {
        if (cities[i].superficy<meanarea){
            wideCities.push(cities[i])
        }
    }
console.log(wideCities);
}