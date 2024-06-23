// import React from 'react';
// import { Search } from 'lucide-react';
// import { Card, CardHeader, CardContent } from './components/ui/card';
// import { Input } from './components/ui/input';
// import { Button } from './components/ui/button';

// function App() {
//   const [restaurantName, setRestaurantName] = React.useState('');
//   const [healthScore, setHealthScore] = React.useState(null);
//   const [emotions, setEmotions] = React.useState([]);

//   const handleSearch = async () => {
//     //API CALL
//     function getRandomInt(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     let healthScore = getRandomInt(75, 100);
//     setHealthScore(healthScore);
//     setEmotions([
//       { name: 'Joy', score: 78 },
//       { name: 'Satisfaction', score: getRandomInt(75, 100) },
//       { name: 'Excitement', score: getRandomInt(75, 100) },
//       { name: 'Contentment', score: getRandomInt(75, 100) },
//       { name: 'Anticipation', score: getRandomInt(75, 100) },
//     ]);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Palette</h1>
//       <div className="flex mb-4">
//         <Input
//           type="text"
//           placeholder="Enter restaurant name"
//           value={restaurantName}
//           onChange={(e) => setRestaurantName(e.target.value)}
//           className="flex-grow mr-2"
//         />
//         <Button onClick={handleSearch}>
//           <Search className="mr-2 h-4 w-4" /> Search
//         </Button>
//       </div>
//       {healthScore !== null && (
//         <Card className="mb-4">
//           <CardHeader>Health Score</CardHeader>
//           <CardContent>
//             <div className="text-4xl font-bold">{healthScore}/100</div>
//           </CardContent>
//         </Card>
//       )}
//       {emotions.length > 0 && (
//         <Card>
//           <CardHeader>Emotional Ratings</CardHeader>
//           <CardContent>
//             {emotions.map((emotion, index) => (
//               <div key={index} className="mb-2">
//                 <div className="flex justify-between">
//                   <span>{emotion.name}</span>
//                   <span>{emotion.score}/100</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-blue-600 h-2.5 rounded-full"
//                     style={{ width: `${emotion.score}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Palette from './Palette';

function App() {
  return (
    <div className="App">
      <Palette initialRestaurant="Pizza Place" />
    </div>
  );
}

export default App;