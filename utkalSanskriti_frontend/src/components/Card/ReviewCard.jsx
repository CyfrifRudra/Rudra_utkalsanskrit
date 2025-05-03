// function ReviewCard({ review }) {
//   return (
//     <div className="border bg-custom-gray p-10 w-full ">
//       <img src= {review.image}></img>
//       <h2 className="text-xl font-semibold mb-2">{review.name}</h2>
//       <p className="text-lg text-blue-600 italic mb-2">Destination: {review.destination}</p>
//       <p>{review.experience}</p>
      
//     </div>
//   );
// }

// export default ReviewCard;


// function ReviewCard({ review }) {
//   return (
//     <div className="border bg-white p-6 w-full rounded-lg shadow-md text-center">
//       <img 
//         src={review.image} 
//         className="w-20 h-20 mx-auto rounded-full border-2 border-gray-300 mb-4"
//       />
//       <h2 className="text-xl font-semibold mb-2">{review.name}</h2>
//       <p className="text-lg text-blue-600 italic mb-2">Destination: {review.destination}</p>
//       <p className="text-gray-700">{review.experience}</p>
       
//     </div>
//   );
// }

// export default ReviewCard;



import { Star } from "lucide-react";

function ReviewCard({ review }) {
  return (
    
    <div className="border bg-white p-6 w-full min-h-[344px] mb-6 max-w-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
      <img 
        src={review.image} 
        alt={review.name}
        className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md mb-4"
      />
      <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-1">{review.name}</h2>
      <p className="text-md text-blue-600 italic mb-2">{review.destination}</p>
      <div className="flex justify-center items-center gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed px-4">{review.experience}</p>
    </div>
  );
}

export default ReviewCard;