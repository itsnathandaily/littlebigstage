

export const CalculateStarRatingAverage = (reviewsArray) => {
    let sum = 0;
    const length = reviewsArray.length
    reviewsArray.forEach(review => sum += review.rating)
   // return sum / length;
   return Math.round(sum/length);
}


// export const CalculateStarRatingAverage = (reviewsArray) => {
//   let average = reviewsArray.reduce(function(accumulated,value){return accumulated + value}, 0)/reviewsArray.length
//   return average;
// }
