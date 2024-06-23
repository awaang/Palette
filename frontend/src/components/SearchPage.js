import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchPage = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [healthScore, setHealthScore] = useState(null);
  const [emotions, setEmotions] = useState([]);

  const handleSearch = async () => {
    // This is where you'd make the API call to your backend
    // For now, we'll use mock data
    setHealthScore(85);
    setEmotions([
      { name: 'Joy', score: 78 },
      { name: 'Satisfaction', score: 72 },
      { name: 'Excitement', score: 65 },
      { name: 'Contentment', score: 60 },
      { name: 'Anticipation', score: 55 },
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Palette</h1>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Enter restaurant name"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
      {healthScore !== null && (
        <Card className="mb-4">
          <CardHeader>Health Score</CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{healthScore}/100</div>
          </CardContent>
        </Card>
      )}
      {emotions.length > 0 && (
        <Card>
          <CardHeader>Emotional Ratings</CardHeader>
          <CardContent>
            {emotions.map((emotion, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between">
                  <span>{emotion.name}</span>
                  <span>{emotion.score}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${emotion.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchPage;