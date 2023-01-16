// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors = moviesArray.map((movie) => {return movie.director})

    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

let movieAmount = moviesArray.filter((currentElement) => {
if(currentElement.director === 'Steven Spielberg' && currentElement.genre.includes('Drama')){
    return currentElement
}
})

return Number(movieAmount) 
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

let avgScore = 0 

if(moviesArray.length === 0){
    return 0 
    }

avgScore = moviesArray.reduce((acc, curr) => {

if(!curr.score){
    curr.score = 0
}

    return acc + curr.score / moviesArray.length
    
}
,0
)

return Number(avgScore.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   
    let dramaMovieArray = moviesArray.filter((currentElement) => {
    if(currentElement.genre.includes('Drama')){
        return currentElement
    }
    })

    let avgScoreDrama = dramaMovieArray.reduce((acc, curr) => {
        return acc + curr.score / moviesArray.length
        }
    ,0
    )
    
    return Number(avgScoreDrama.toFixed(2))
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {


copyOfArray = moviesArray.sort((movie1, movie2) => {
if (movie1.year < movie2.year){
    return -1
}
else if (movie1.year > movie2.year){
    return 1
}
else {

    if (movie1.title < movie2.title){
        return -1
    }
    else if (movie1.title > movie2.title){
        return 1
    } 
    else {return 0}
}
})

return copyOfArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

let titleArray = moviesArray.map((currentElement) => {
return currentElement.title
})

if(titleArray.length <= 20){
    return titleArray
}
else if(titleArray.length > 20){
    titleArraySliced = titleArray.slice(0,19)
}

let alphabeticOrder = titleArraySliced.sort((movie1,movie2) => {
    
    if(movie1.localeCompare(movie2)){
        return -1
    }
    else if(movie2.localeCompare(movie1)){
        return 1
    }
    else {return} 
})

return alphabeticOrder
}

/*
copyOfArray = moviesArray.sort((movie1, movie2) => {
if (movie1.year < movie2.year){
    return -1
}
else if (movie1.year > movie2.year){
    return 1
}
else {

    if (movie1.title < movie2.title){
        return -1
    }
    else if (movie1.title > movie2.title){
        return 1
    } 
    else {return 0}
}
})
*/



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
