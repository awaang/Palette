import React, { useState } from 'react';
import { Search, Utensils, Activity, TrendingUp, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

const Palette = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [healthScore, setHealthScore] = useState(null);
  const [emotions, setEmotions] = useState([]);
  const [reviewSummary, setReviewSummary] = useState('');

  const handleSearch = async () => {
    // Mock data for demonstration
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    setHealthScore(getRandomInt(75, 100));
    setEmotions([
      { name: 'Satisfaction', score: getRandomInt(30, 100) },
      { name: 'Enjoyment', score: getRandomInt(30, 100) },
      { name: 'Comfort', score: getRandomInt(30, 100) },
      { name: 'Excitement', score: getRandomInt(30, 100) },
      { name: 'Disappointment', score: getRandomInt(30, 100) },
    ]);
    setReviewSummary("Diners consistently praise the restaurant's innovative menu and attentive service. The ambiance is described as cozy and welcoming, perfect for both casual dinners and special occasions. While most patrons rave about the food quality, a few mention that prices are on the higher side. Overall, the restaurant seems to offer a memorable dining experience that keeps customers coming back.");
  };

  const getBarColor = (score) => {
    if (score > 80) return 'bg-green-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-white p-8 font-['Inter', sans-serif]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Utensils className="text-gray-800 h-8 w-8 mr-3" />
          <h1 className="text-3xl font-semibold text-gray-800">Palette</h1>
        </div>
        
        <div className="mb-12">
          <div className="flex items-center shadow-sm">
            <Input
              type="text"
              placeholder="Enter restaurant name"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              className="flex-grow border-r-0 rounded-r-none focus:ring-0 focus:border-gray-300"
            />
            <Button onClick={handleSearch} variant="outline" className="rounded-l-none border-l-0 bg-white hover:bg-gray-50">
              <Search className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>

        {healthScore !== null && (
          <div className="space-y-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-800 font-semibold">
                  <Activity className="mr-2 h-5 w-5 text-gray-500" />
                  Health Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <div className="text-5xl font-medium text-gray-800">{healthScore}</div>
                  <div className="text-xl text-gray-500 ml-2">/100</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-800 font-semibold">
                  <TrendingUp className="mr-2 h-5 w-5 text-gray-500" />
                  Emotional Ratings
                </CardTitle>
              </CardHeader>
              <CardContent>
                {emotions.map((emotion, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600 font-medium">{emotion.name}</span>
                      <span className="text-sm text-gray-500">{emotion.score}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${getBarColor(emotion.score)} h-2 rounded-full`}
                        style={{ width: `${emotion.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-800 font-semibold">
                  <MessageSquare className="mr-2 h-5 w-5 text-gray-500" />
                  User Review Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{reviewSummary}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Palette;