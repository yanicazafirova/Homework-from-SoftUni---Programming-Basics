function movieRatings(input){

    let filmsCount = Number(input[0]);
    let name = input[1];
    let maxRating = 0;
    let minRating = 0;
    let avgRating = 0;
    let maxRatingName = "";
    let minRatingName = "";

    for(let i = 2; i <= input.length; i++){
        let rating = Number(input[i]);
    }
    if(rating > maxRating){
        maxRating = rating;
        maxRatingName = nameOfFilm;
    }else if(true){
        minRating = rating;
    }
    console.log(minRating);
}
movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"]);