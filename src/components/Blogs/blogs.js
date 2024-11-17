import React, { useState } from 'react';
import './blogs.css';

const Blogs = () => {
  const posts = [
    {
      id: 1,
      title: 'The Health Benefits of Multigrain Flour',
      date: '2024-09-30',
      summary: 'Discover the health benefits of including multigrain flour in your diet and why it’s considered a powerhouse of nutrition.',
      content: 'Multigrain flour is made by blending different grains like wheat, oats, barley, and millet, which ensures a variety of nutrients in one meal. It is rich in dietary fiber, aiding digestion and keeping you full longer. Vitamins, minerals, and antioxidants found in these grains contribute to overall health and reduce the risk of chronic diseases. Switching to multigrain flour can significantly improve your heart health, blood sugar levels, and weight management.'
    },
    {
      id: 2,
      title: 'Why Cold-Pressed Mustard Oil Is a Must for Your Kitchen',
      date: '2024-09-15',
      summary: 'Cold-pressed mustard oil retains nutrients and offers multiple health benefits. Find out why it should be a staple in your cooking.',
      content: 'Unlike refined oils, cold-pressed mustard oil retains its natural antioxidants and essential fatty acids, making it a healthy option for cooking. It has anti-inflammatory properties, boosts heart health, and is great for the skin when used externally. The sharp, pungent taste adds flavor to your dishes, making it ideal for pickles and traditional recipes. Learn how to incorporate mustard oil into your meals for both health and taste.'
    },
    {
      id: 3,
      title: 'Gluten-Free Flour: A Boon for Those with Gluten Sensitivity',
      date: '2024-09-25',
      summary: 'Learn about the advantages of gluten-free flour and how it can help people with celiac disease or gluten sensitivity live a healthier life.',
      content: 'Gluten-free flour is an excellent substitute for people who are intolerant to gluten. Made from grains like rice, chickpea, or almonds, this flour provides a nutritious alternative that’s easy to digest. It helps avoid symptoms like bloating, cramps, and fatigue associated with gluten consumption. Not just for those with celiac disease, gluten-free flour is a versatile option for baking and cooking, providing essential nutrients without compromising taste and texture.'
    },
    {
      id: 4,
      title: 'Traditional Uses of Mustard Oil in Indian Households',
      date: '2024-09-10',
      summary: 'Mustard oil has been a staple in Indian households for centuries. Learn about its traditional uses beyond cooking.',
      content: 'Mustard oil is not only used for cooking but also as a massage oil to relieve muscle pain and improve blood circulation. It has anti-fungal and anti-bacterial properties, making it effective for treating skin infections. In winter, it is commonly applied to the scalp to promote hair growth and prevent dandruff. This multi-purpose oil has also been used as a natural remedy for cold and cough, when massaged onto the chest or added to steam.'
    },
    {
      id: 5,
      title: 'The Advantages of Using Whole Wheat Flour in Baking',
      date: '2024-08-28',
      summary: 'Find out why whole wheat flour is a healthier choice for baking and how it can enhance the nutritional value of your recipes.',
      content: 'Whole wheat flour contains all parts of the wheat kernel, including the bran, germ, and endosperm. This means it retains more nutrients compared to refined flour, including fiber, B vitamins, and essential minerals. Using whole wheat flour in baking can give a richer, nuttier flavor to bread, muffins, and cookies, while also boosting their nutritional content. It helps in better digestion, supports heart health, and keeps you fuller for longer periods.'
    },
    {
      id: 6,
      title: 'Multigrain vs. Whole Wheat Flour: Which Is Better?',
      date: '2024-08-15',
      summary: 'Explore the differences between multigrain and whole wheat flour, and find out which is a better choice for your health.',
      content: 'Both multigrain and whole wheat flour offer unique health benefits. Whole wheat flour is made from a single grain and retains all the nutrients of the wheat kernel. Multigrain flour, on the other hand, is a blend of different grains, which provides a more diverse nutrient profile. While whole wheat flour is rich in fiber, multigrain flour offers a broader range of vitamins and minerals. Depending on your dietary needs, both can be excellent choices for maintaining a balanced diet.'
    },
    {
      id: 7,
      title: 'How to Store Flour and Oil for Maximum Freshness',
      date: '2024-08-05',
      summary: 'Proper storage of flour and oil can help preserve their freshness and nutritional value. Learn the best practices for storing these essentials.',
      content: 'To keep flour fresh, store it in an airtight container in a cool, dry place. Whole grain flours should be kept in the refrigerator to prevent rancidity. Oil, especially cold-pressed oils like mustard oil, should be stored in a dark glass bottle away from direct sunlight and heat to maintain its quality. Proper storage prevents the formation of mold, keeps pests away, and ensures that the nutritional value and flavor of your flour and oil are preserved.'
    },
    {
      id: 8,
      title: 'Cooking with Multigrain Flour: Delicious Recipes to Try',
      date: '2024-07-20',
      summary: 'Looking for new ways to incorporate multigrain flour into your meals? Here are some delicious and healthy recipes to try.',
      content: 'Multigrain flour is versatile and can be used in a variety of recipes, from traditional Indian flatbreads to modern baked goods. Try making multigrain roti for a healthy twist on a staple meal, or bake multigrain banana bread for a nutrient-rich snack. You can also use it to make pancakes, cookies, and even pizza dough. These recipes not only taste great but also provide the added benefits of multiple grains in every bite.'
    },
    {
      id: 9,
      title: 'Mustard Oil vs. Refined Oil: Which Is Healthier?',
      date: '2024-07-05',
      summary: 'Compare mustard oil with refined oil to understand which one is a healthier choice for your cooking needs.',
      content: 'Mustard oil is cold-pressed and retains its natural antioxidants and essential fatty acids, whereas refined oil undergoes multiple processes that strip it of its nutrients. Mustard oil has a high smoking point and contains monounsaturated fats, which are good for heart health. Refined oils, although more neutral in taste, often contain trans fats and lack the nutritional benefits found in mustard oil. If health is a priority, mustard oil is the better option for everyday cooking.'
    },
    {
      id: 10,
      title: 'The Role of Fiber in Your Diet and How Flour Plays a Part',
      date: '2024-06-25',
      summary: 'Learn about the importance of dietary fiber and how choosing the right flour can help you meet your daily fiber requirements.',
      content: 'Fiber is crucial for maintaining digestive health, regulating blood sugar levels, and preventing constipation. Whole wheat and multigrain flours are excellent sources of dietary fiber, unlike refined flour, which lacks the bran and germ components. Including fiber-rich flour in your diet can help you stay full longer, maintain healthy cholesterol levels, and support a healthy weight. Making simple swaps like using whole wheat flour instead of refined flour can significantly improve your fiber intake.'
    },
  ];

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
                <p className="post-date">Published on: {post.date}</p>
                <p>{post.summary}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="post-detail">
          <button onClick={closePost} className="back-button">Back to Blog</button>
          <h2>{selectedPost.title}</h2>
          <p className="post-date">Published on: {selectedPost.date}</p>
          <p>{selectedPost.content}</p>
        </div>
      )}
    </div>
  );
};

export default Blogs;
