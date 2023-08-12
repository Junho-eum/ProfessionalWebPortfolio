// FilterTab.jsx
import React, { useState } from "react";

function FilterTab() {
  const categories = ["Algorithm", "Model Architecture", "Business", "Music"];
  // rest of the code...
  const articles = {
    Algorithm: [
      {
        title: "Sorting Algorithms",
        description: "A brief overview of sorting algorithms.",
      },
      {
        title: "Search Algorithms",
        description: "A summary of various search algorithms.",
      },
    ],
    "Model Architecture": [
      {
        title: "Convolutional Neural Networks",
        description: "Introduction to CNNs and their applications.",
      },
      {
        title: "Recurrent Neural Networks",
        description: "Understanding RNNs and their use in sequence data.",
      },
      {
        title: "Recurrent Neural Networks",
        description: "Understanding RNNs and their use in sequence data.",
      }
    ],
    Business: [
      {
        title: "Business Strategy 101",
        description: "Foundations of crafting a business strategy.",
      },
      {
        title: "Marketing Techniques",
        description: "Modern marketing methods and how to apply them.",
      },
    ],
    Music: [
      {
        title: "Music Theory Basics",
        description: "A beginner's guide to music theory.",
      },
      {
        title: "Instrument Tuning",
        description: "How to tune various musical instruments.",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("Algorithm");

  return (
    <div>
      <div>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div>
        <h2>{selectedCategory}</h2>
        <ul>
          {articles[selectedCategory].map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterTab;
