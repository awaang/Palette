require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { Configuration, OpenAIApi } = require('openai');
const yelp = require('yelp-fusion');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
const yelpClient = yelp.client(process.env.YELP_API_KEY);

app.post('/api/restaurant-analysis', async (req, res) => {
  const { restaurantName } = req.body;

  try {
    const healthScore = await generateHealthScore(restaurantName);
    const reviews = await getYelpReviews(restaurantName);
    const emotions = await analyzeEmotions(reviews);

    res.json({ healthScore, emotions });
  } catch (error) {
    console.error('Error in restaurant analysis:', error);
    res.status(500).json({ error: 'An error occurred during analysis' });
  }
});

async function generateHealthScore(restaurantName) {
  // Simulate a call to You.com API and AWS database
  const restaurantInfo = `Restaurant: ${restaurantName}\nHealth Inspection: Passed\nViolations: 2 minor\nLast Inspection Date: 2023-05-15`;

  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `Based on the following health inspection information, generate a health score out of 100 for the restaurant:\n\n${restaurantInfo}\n\nHealth Score:`,
    max_tokens: 5,
    n: 1,
    stop: null,
    temperature: 0.5,
  });

  return parseInt(response.data.choices[0].text.trim());
}

async function getYelpReviews(restaurantName) {
  const searchResponse = await yelpClient.search({ term: restaurantName, location: 'San Francisco, CA', limit: 1 });
  const business = searchResponse.jsonBody.businesses[0];
  
  if (!business) {
    throw new Error('Restaurant not found');
  }

  const reviewsResponse = await yelpClient.reviews(business.id);
  return reviewsResponse.jsonBody.reviews.map(review => review.text).join(' ');
}

async function analyzeEmotions(reviews) {
  // Simulate a call to Hume API
  const emotions = [
    { name: 'Joy', score: Math.floor(Math.random() * 100) },
    { name: 'Satisfaction', score: Math.floor(Math.random() * 100) },
    { name: 'Excitement', score: Math.floor(Math.random() * 100) },
    { name: 'Disappointment', score: Math.floor(Math.random() * 100) },
    { name: 'Frustration', score: Math.floor(Math.random() * 100) },
  ];

  return emotions.sort((a, b) => b.score - a.score).slice(0, 5);
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));