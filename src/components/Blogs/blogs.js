import React, { useState } from 'react';
import './blogs.css';

const Blogs = () => {
  const posts = [
    {
      "id":1,
      "title": "Multiple Health Benefits of Chakki Fresh Atta",
      "description": "Explore the numerous health advantages of consuming Chakki Fresh Atta, including its rich fiber content and essential nutrients.",
      "details": "Chakki Fresh Atta is 100% whole wheat grain, full of nutrients, vitamins, and dietary fiber that is essential for a healthy digestive system. It supports lowering blood cholesterol and aids in maintaining fitness. The traditional stone-grinding process retains the bran, germ, and endosperm, making it a rich source of dietary fiber, essential vitamins like B1, B2, B3, B6, and minerals such as iron, magnesium, and zinc. Regular consumption contributes to heart health, weight management, and reduces the risk of chronic diseases."
    },
    {
      "id":2,
      "title": "Understanding Seed Oils: Are They Bad for You?",
      "description": "A registered dietitian explains the nutritional profile of seed oils and addresses common concerns about their health effects.",
      "details": "Seed oils, derived from plant seeds, are commonly used in cooking due to their versatility, high smoke points, and neutral flavors. Despite their popularity, they face controversy primarily because of their high omega-6 fatty acid (linoleic acid) content, which some believe could enhance inflammation. However, research does not substantiate these claims consistently, indicating that seed oils do not inherently increase inflammation but highlight the importance of a balanced intake of omega-3 and omega-6 fatty acids. Seed oils are also genetically modified for efficiency and resistance to pests, which some critics argue could impact plant biodiversity and lead to increased herbicide use. Overall, these oils contain beneficial mono- and polyunsaturated fats and vitamins. While frying repeatedly with seed oils and consuming highly processed foods can produce harmful molecules, moderate use in home cooking presents minimal health risks and offers several health benefits."
    },
    {
      "id":3,
      "title": "The Traditional Process of Making Chakki Fresh Atta",
      "description": "Delve into the age-old method of stone-grinding wheat to produce nutrient-rich Chakki Fresh Atta.",
      "details": "The traditional stone-grinding process used to make Chakki Atta helps retain the natural nutrients and oils present in the wheat kernel. This method involves grinding whole wheat grains between two stone plates, preserving the bran, germ, and endosperm, resulting in flour that is richer in nutrients compared to highly processed refined flour."
    },
    {
      "id":4,
      "title": "5 Delicious Recipes Using Chakki Fresh Atta",
      "description": "Try these five mouth-watering recipes that utilize Chakki Fresh Atta for a wholesome meal.",
      "details": "Chakki Fresh Atta can be used to prepare a variety of dishes, including soft and fluffy chapatis, parathas stuffed with various fillings, whole wheat bread, and even desserts like atta halwa. Its rich flavor and nutritional profile make it a versatile ingredient in both traditional and modern recipes."
    },
    {
      "id":5,
      "title": "How to Identify Genuine Chakki Fresh Atta in the Market",
      "description": "Learn tips and tricks to ensure you're purchasing authentic Chakki Fresh Atta.",
      "details": "To identify genuine Chakki Fresh Atta, look for flour that has a slightly coarse texture and a distinct aroma of whole wheat. Check the packaging for information about the milling process; traditional stone-ground methods are preferred. Additionally, reputable brands often provide details about the sourcing of their wheat and milling techniques."
    },
    {
      "id":6,
      "title": "The Rise of Chakki Fresh Atta in Modern Kitchens",
      "description": "Understand the growing popularity of Chakki Fresh Atta among health-conscious consumers.",
      "details": "With increasing awareness about the health benefits of whole grains, Chakki Fresh Atta has seen a resurgence in popularity. Its rich nutritional profile, free from additives and preservatives, aligns with the preferences of health-conscious consumers seeking natural and wholesome food options."
    },
    {
      "id":7,
      "title": "Health Benefits of Hot-Pressed Mustard Oil",
      "description": "Discover the numerous health benefits associated with incorporating hot-pressed mustard oil into your diet.",
      "details": "Hot-pressed mustard oil is rich in monounsaturated fats, omega-3 fatty acids, and natural antioxidants. These components contribute to heart health by managing cholesterol levels, reducing inflammation, and providing essential nutrients. Additionally, mustard oil has antimicrobial properties and is used in traditional remedies for skin and hair care."
    },
    {
      "id":8,
      "title": "Traditional Uses of Mustard Oil in Indian Cuisine",
      "description": "Explore the cultural significance and traditional uses of mustard oil in Indian cooking.",
      "details": "Mustard oil holds a prominent place in Indian cuisine, especially in Eastern and Northern regions. It's used for sautéing, pickling, and as a flavor enhancer in various dishes. Beyond cooking, mustard oil is traditionally used in Ayurvedic practices for massages, believed to improve circulation and detoxify the body."
    },
    {
      "id":9,
      "title": "Incorporating Mustard Oil into Your Daily Diet",
      "description": "Tips and recipes for adding mustard oil to your everyday cooking for enhanced flavor and health benefits.",
      "details": "Mustard oil can be used in various culinary applications, such as sautéing vegetables, preparing marinades, and making traditional pickles. Its pungent flavor adds depth to dishes like fish curry, stir-fried greens, and spicy condiments. Start with small quantities to acclimate to its strong taste."
    },
    {
      "id":10,
      "title": "The Role of Mustard Oil in Ayurvedic Practices",
      "description": "An exploration of how mustard oil is utilized in Ayurveda for its therapeutic properties.",
      "details": "In Ayurveda, mustard oil is valued for its warming properties and is used in massages to relieve muscle pain, improve blood circulation, and detoxify the skin. It's also applied to the scalp to promote hair health and is believed to have antifungal and antibacterial properties."
    },
    {
      "id":11,
      "title": "Mustard Oil: A Natural Remedy for Common Ailments",
      "description": "Discover how mustard oil is used as a home remedy for various health issues.",
      "details": "Traditionally, mustard oil has been used to alleviate colds, coughs, and joint pain. Its anti-inflammatory properties make it suitable for massages to relieve arthritis symptoms. Additionally, it's applied to the chest to relieve respiratory congestion and used in oil pulling practices for oral health."
    }];
   
  

  const [selectedPost, setSelectedPost] = useState(null);

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-page">
      {!selectedPost ? (
        <>
          <div className="post-list">
            {posts.map((post) => (
              <div key={post.id} className="post-summary" onClick={() => openPost(post)}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="post-detail">
          <button onClick={closePost} className="back-button">Back to Blog</button>
          <h1>{selectedPost.title}</h1>
          <p>{selectedPost.details}</p>
        </div>
      )}
    </div>
  );
};

export default Blogs;
