// src/data/recipesData.js
import AlooParatha from '../assets/aloo-paratha.jpg'
import chapati from '../assets/chapati.jpg'
import mustardOilPulao from '../assets/mustard-oil-vegetable-pulao.jpg'
import attaPancakes from '../assets/atta-pancakes.jpg'
import wholeWheatNaan from '../assets/whole-wheat-naan.jpg'
import vegetableKachori from '../assets/vegetable-stuffed-kachori.jpg'
import methiThepla from '../assets/methi-thepla.jpg'
import RotiPizza from '../assets/roti-pizza.jpg'
import wholeWheatChocolateCake from '../assets/whole-wheat-chocolate-cake.jpg'
import dhokla from '../assets/dhokla.jpg'
import attaBread from '../assets/atta-bread.jpg'
import stuffedPaneerParatha from '../assets/stuffed-paneer-paratha.jpg'
import attaFruitCake from '../assets/atta-fruit-cake.jpg'
import wholeWheatIdli from '../assets/whole-wheat-idli.jpg'
import puranPoli from '../assets/puran-poli.jpg'
import masalaAttaDosa from '../assets/masala-atta-dosa.jpg'
import AttaLadoo from '../assets/atta-ladoo.jpg'
import wholeWheatKhichdi from '../assets/whole-wheat-khichdi.jpg'
const recipesData = [
    {
        id: 1,
        title: "Aloo Paratha",
        image: AlooParatha,
        description: "Delicious stuffed flatbread made with whole wheat flour and spiced potatoes.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "2 large potatoes, boiled and mashed",
            "1 tsp cumin seeds",
            "2 green chilies, chopped",
            "Salt to taste",
            "Mustard oil for cooking"
        ],
        steps: [
            "In a bowl, mix flour with water and knead into a smooth dough.",
            "In another bowl, combine mashed potatoes, cumin, chilies, and salt.",
            "Divide dough into balls, roll them out, place filling, and seal.",
            "Cook on a hot skillet with mustard oil until golden brown on both sides."
        ]
    },
    {
        id: 2,
        title: "Chapati",
        image: chapati,
        description: "Soft chapatis made with whole wheat flour.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "Salt to taste",
            "Water, as needed"
        ],
        steps: [
            "Mix flour and salt in a bowl.",
            "Gradually add water and knead into a smooth dough.",
            "Divide into balls, roll out into flat discs, and cook on a skillet.",
            "Serve hot with your favorite curry."
        ]
    },
    {
        id: 3,
        title: "Mustard Oil Vegetable Pulao",
        image: mustardOilPulao,
        description: "A fragrant rice dish cooked with vegetables and flavored with mustard oil.",
        ingredients: [
            "1 cup basmati rice",
            "1 cup mixed vegetables (carrots, peas, beans)",
            "2 tbsp mustard oil",
            "1 tsp cumin seeds",
            "Salt to taste",
            "Water as needed"
        ],
        steps: [
            "Heat mustard oil in a pot, add cumin seeds, and sauté until fragrant.",
            "Add mixed vegetables and cook for a few minutes.",
            "Add washed rice and water, bring to a boil, then simmer until rice is cooked."
        ]
    },
    {
        id: 4,
        title: "Atta Pancakes",
        image: attaPancakes,
        description: "Fluffy pancakes made with a mix of semolina and whole wheat flour, perfect for breakfast.",
        ingredients: [
            "1 cup semolina",
            "1 cup whole wheat flour (atta)",
            "1/2 cup yogurt",
            "1 tsp baking powder",
            "Salt to taste",
            "Mustard oil for cooking"
        ],
        steps: [
            "Mix semolina, atta, yogurt, baking powder, and salt in a bowl.",
            "Add water to make a batter of pouring consistency.",
            "Heat a skillet, pour batter, and cook with mustard oil until golden brown."
        ]
    },
    {
        id: 5,
        title: "Whole Wheat Naan",
        image: wholeWheatNaan,
        description: "Soft and fluffy naan made with whole wheat flour, perfect for curries.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "1/2 cup yogurt",
            "1 tsp baking powder",
            "1 tsp sugar",
            "Salt to taste",
            "Water, as needed"
        ],
        steps: [
            "Mix all ingredients to form a dough and let it rest for 1 hour.",
            "Divide dough into balls and roll out into naan shape.",
            "Cook on a hot skillet or tandoor until bubbly and cooked through."
        ]
    },
    {
        id: 6,
        title: "Vegetable Stuffed Kachori",
        image: vegetableKachori,
        description: "Crispy kachoris stuffed with spiced vegetables, perfect for snacking.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "1 cup mixed vegetables, mashed",
            "1 tsp cumin seeds",
            "Spices to taste",
            "Mustard oil for frying"
        ],
        steps: [
            "Prepare dough with flour and water; let rest.",
            "Make a filling with mashed vegetables and spices.",
            "Roll out dough, fill with mixture, and seal.",
            "Deep fry until golden brown."
        ]
    },
    {
        id: 7,
        title: "Methi Thepla",
        image: methiThepla,
        description: "Flavored flatbreads made with whole wheat flour and fenugreek leaves.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "1 cup methi (fenugreek) leaves, chopped",
            "1 tsp turmeric powder",
            "1 tsp chili powder",
            "Salt to taste",
            "Mustard oil for cooking"
        ],
        steps: [
            "Mix flour, methi leaves, spices, and salt.",
            "Knead with water to form a dough.",
            "Roll into flatbreads and cook with mustard oil."
        ]
    },
    {
        id: 8,
        title: "Roti Pizza",
        image: RotiPizza,
        description: "Healthy pizza made on a whole wheat roti base.",
        ingredients: [
            "2 whole wheat rotis",
            "1/2 cup pizza sauce",
            "1 cup mixed vegetables, chopped",
            "1 cup cheese, grated",
            "1 tbsp mustard oil"
        ],
        steps: [
            "Spread pizza sauce on roti, top with vegetables and cheese.",
            "Drizzle mustard oil and bake until cheese melts."
        ]
    },
    {
        id: 9,
        title: "Whole Wheat Chocolate Cake",
        image: wholeWheatChocolateCake,
        description: "Deliciously moist chocolate cake made with whole wheat flour.",
        ingredients: [
            "1 1/2 cups whole wheat flour (atta)",
            "1 cup cocoa powder",
            "1 cup sugar",
            "1/2 cup mustard oil",
            "1 tsp baking powder",
            "1 tsp vanilla extract",
            "Water as needed"
        ],
        steps: [
            "Mix dry ingredients and add wet ingredients to form a batter.",
            "Pour into a greased pan and bake at 350°F (175°C) for 30-35 minutes."
        ]
    },
    {
        id: 10,
        title: "Besan and Atta Dhokla",
        image: dhokla,
        description: "Steamed savory cake made with besan and whole wheat flour.",
        ingredients: [
            "1 cup besan (gram flour)",
            "1 cup whole wheat flour (atta)",
            "1 tsp baking soda",
            "1 tbsp mustard oil",
            "Spices to taste",
            "Water as needed"
        ],
        steps: [
            "Mix all ingredients into a batter.",
            "Pour into a greased steamer and steam for 20-25 minutes."
        ]
    },
    {
        id: 11,
        title: "Atta Bread",
        image: attaBread,
        description: "Homemade bread made with whole wheat flour.",
        ingredients: [
            "3 cups whole wheat flour (atta)",
            "1 packet yeast",
            "1 tsp salt",
            "2 tbsp sugar",
            "1 tbsp mustard oil",
            "Water as needed"
        ],
        steps: [
            "Activate yeast in warm water with sugar.",
            "Mix flour and salt, add yeast mixture, and knead into a dough.",
            "Let rise for an hour, shape, and bake at 375°F (190°C)."
        ]
    },
    {
        id: 12,
        title: "Stuffed Paneer Paratha",
        image: stuffedPaneerParatha,
        description: "Parathas stuffed with spiced paneer filling.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "1 cup paneer, crumbled",
            "1 tsp cumin powder",
            "Salt to taste",
            "Mustard oil for cooking"
        ],
        steps: [
            "Prepare dough with flour and water; let rest.",
            "Mix paneer with spices to form the filling.",
            "Roll out dough, fill with mixture, and cook on a skillet."
        ]
    },
    {
        id: 13,
        title: "Atta Fruit Cake",
        image: attaFruitCake,
        description: "A healthy fruit cake made with whole wheat flour.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "1 cup mixed dried fruits",
            "1 cup sugar",
            "1/2 cup mustard oil",
            "1 tsp baking powder",
            "Water as needed"
        ],
        steps: [
            "Mix all dry ingredients, then add wet ingredients to form a batter.",
            "Pour into a greased pan and bake at 350°F (175°C) for 45-50 minutes."
        ]
    },
    {
        id: 14,
        title: "Whole Wheat Idli",
        image: wholeWheatIdli,
        description: "Healthy idlis made with fermented whole wheat batter.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "1 cup yogurt",
            "1/2 cup water",
            "Salt to taste"
        ],
        steps: [
            "Mix all ingredients and let it ferment overnight.",
            "Pour into idli molds and steam for 10-12 minutes."
        ]
    },
    {
        id: 15,
        title: "Puran Poli",
        image:puranPoli,
        description: "Sweet flatbread stuffed with a lentil filling.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "1 cup chana dal, cooked",
            "1 cup jaggery, grated",
            "1/2 tsp cardamom powder",
            "Mustard oil for cooking"
        ],
        steps: [
            "Make a dough with flour and water; let it rest.",
            "Mash dal with jaggery and cardamom to make filling.",
            "Roll out dough, fill with mixture, and cook on a skillet."
        ]
    },
    {
        id: 17,
        title: "Masala Atta Dosa",
        image: masalaAttaDosa,
        description: "Crispy dosas made with whole wheat flour and a spicy potato filling.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "1 cup boiled potatoes, mashed",
            "1 tsp mustard seeds",
            "Salt to taste",
            "Mustard oil for cooking"
        ],
        steps: [
            "Mix flour and water to form a batter.",
            "Prepare filling with potatoes and spices.",
            "Spread batter on a skillet, fill with potato mixture, and cook until crisp."
        ]
    },
    {
        id: 18,
        title: "Atta Ladoo",
        image: AttaLadoo,
        description: "Healthy sweet balls made with roasted whole wheat flour and jaggery.",
        ingredients: [
            "2 cups whole wheat flour (atta)",
            "1 cup jaggery, grated",
            "1/2 cup ghee",
            "1/2 cup nuts, chopped",
            "1/2 tsp cardamom powder"
        ],
        steps: [
            "Roast flour in ghee until golden.",
            "Mix in jaggery, nuts, and cardamom.",
            "Shape into small balls."
        ]
    },
    {
        id: 19,
        title: "Whole Wheat Khichdi",
        image: wholeWheatKhichdi,
        description: "Comforting dish made with rice, dal, and spices, using whole wheat.",
        ingredients: [
            "1 cup whole wheat",
            "1 cup moong dal",
            "2 cups water",
            "1 tsp cumin seeds",
            "Salt to taste",
            "Mustard oil for tempering"
        ],
        steps: [
            "Cook wheat and dal with water until soft.",
            "Heat mustard oil, add cumin, and pour over khichdi before serving."
        ]
    }
];

export default recipesData;
