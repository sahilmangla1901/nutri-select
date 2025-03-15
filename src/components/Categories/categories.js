
// import { useParams } from 'react-router-dom';
import Front from './Front.png';
import Back from './Back.png';
import litre2 from './2l.png';
import litre1 from './1l.png';
import litre5 from './5l.png';
import litre15 from './15l.png';
import fssai from './fssai.png';
import manufactured from './manufactured.png';
import oilTable from './oiltable.png';
import attaTable from './attaTable.png';
import litre15Back from './15ltTinBack.png';
import litre5Back from './5LtBack.png';
import designOil from './designoil.png';

// const Categories = () => {
//   const { categoryId } = useParams();
//   const [ mainImage, setMainImage ] = useState(null);
//   const categories = {
//     1: {
//       name: 'Wheat Flour',
//       description: "NutriSelect Wheat Flour is made from the finest, naturally grown wheat grains, carefully selected to bring you a flour that’s rich in nutrients and crafted for authentic taste. Our wheat flour is freshly milled, preserving the wholesome fiber and essential nutrients that make each meal nourishing. Soft and versatile, it’s perfect for rotis, parathas, and baking, bringing consistent quality and flavor to your kitchen.",
//       productChoose: "Our wheat flour is more than just an ingredient – it’s a commitment to purity and health. With a dedication to quality at every step, NutriSelect ensures that every batch meets the highest standards for you and your family. It’s the natural choice for those who value wholesome, nutritious meals that don’t compromise on flavor.",
//       benefits: [
//         "100% Natural and Pure: No additives or preservatives, just pure wheat goodness.",
//         "Rich in Fiber: Supports digestion and helps keep you fuller for longer.",
//         "Soft Texture: Milled for a consistent texture that’s perfect for light, fluffy rotis.",
//         "Versatile: Ideal for traditional Indian dishes, baking, and more."
//       ],
//       images:[Front, Back],
//       mainImage:Front

//     },
//     2: {
//       name: 'Mustard Oil',
//       description: "NutriSelect Mustard Oil is carefully extracted from high-quality mustard seeds, bringing the bold flavor and rich aroma that traditional recipes demand. Known for its distinctive taste and numerous health benefits, our mustard oil is unrefined and pure, ensuring it retains essential nutrients and natural antioxidants. From deep frying to stir-frying, NutriSelect Mustard Oil is a perfect choice for everyday cooking, enhancing flavors while promoting wellness.",
//       productChoose: "Our mustard oil is crafted with integrity and quality, offering the authentic essence of mustard seeds without any artificial additives. Rich in Omega-3 fatty acids and essential nutrients, NutriSelect Mustard Oil not only elevates the taste of your dishes but also supports heart health and immunity. It’s a staple for kitchens that prioritize both flavor and health.",
//       benefits: [
//         "100% Pure and Unrefined: Naturally extracted to retain the full nutritional profile and flavor.",
//         "Rich in Omega-3 and Antioxidants: Supports heart health and overall wellness.",
//         "Natural Preservative Properties: Known for its antimicrobial qualities, helping to preserve food naturally.",
//         "Bold, Authentic Flavor: Adds depth and richness to both traditional and modern recipes.",
//         "Ideal for Multiple Cooking Styles: Perfect for sautéing, deep frying, pickling, and more."
//       ],
//       images:[litre1, litre2, litre5, litre15],
//       mainImage:litre1
//     }
//   };
//   const changeMainImage=(event)=>{
//     console.log(event);
//     setMainImage(event.target.src);
//   }
//   const category = categories[categoryId];
//   useEffect(()=>{
//     setMainImage(categories[categoryId].mainImage);
//   },[])
//   const categoryImages = categories[categoryId].images.map((image) => {
//     return <img className='image-array' alt="image-array" onMouseEnter={(event)=>changeMainImage(event)} src={image} />
//   })

//   return (
//     <div className="products-page">
//       <div className='coming-soon-image mb-3'>
//         <div className='images-array'>
//           {categoryImages}
//         </div>
//         <img className='main-image' alt="main-image" src={mainImage} />
//       </div>
//       <div className="product-list">
//         <h2 className='product-title'>{category.name}</h2>
//         <div className='product-desc'>{category.description}</div>
//         <h4>Why Choose NutriSelect?</h4>
//         <div className='product-choose'>{category.productChoose}</div>
//         <h4>Key Benefits</h4>
//         <div className='product-benefits'>
//           {category.benefits.map(benefit => (
//             <div key={category.id} className="product-benefits-card">
//               <img src={tick} width="20" height="20" alt="radio" className='tick-image' />
//               <span>{benefit}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./categories.css";


export default function Categories() {
  const { categoryId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const categories = {
    1: {
      name: 'Wheat Flour',
      description: "NutriSelect Wheat Flour is made from the finest, naturally grown wheat grains, carefully selected to bring you a flour that’s rich in nutrients and crafted for authentic taste. Our wheat flour is freshly milled, preserving the wholesome fiber and essential nutrients that make each meal nourishing. Soft and versatile, it’s perfect for rotis, parathas, and baking, bringing consistent quality and flavor to your kitchen.",
      productChoose: "Our wheat flour is more than just an ingredient – it’s a commitment to purity and health. With a dedication to quality at every step, NutriSelect ensures that every batch meets the highest standards for you and your family. It’s the natural choice for those who value wholesome, nutritious meals that don’t compromise on flavor.",
      benefits: [
        "100% Natural and Pure: No additives or preservatives, just pure wheat goodness.",
        "Rich in Fiber: Supports digestion and helps keep you fuller for longer.",
        "Soft Texture: Milled for a consistent texture that’s perfect for light, fluffy rotis.",
        "Versatile: Ideal for traditional Indian dishes, baking, and more."
      ],
      defaultQuantity:"5Kg",
      images: {
        "5Kg": [Front, Back, attaTable, fssai, manufactured],
        "10Kg": [Front, Back, attaTable, fssai, manufactured],
      },
      mainImage: Front

    },
    2: {
      name: 'Mustard Oil',
      description: "NutriSelect Mustard Oil is carefully extracted from high-quality mustard seeds, bringing the bold flavor and rich aroma that traditional recipes demand. Known for its distinctive taste and numerous health benefits, our mustard oil is naturally filtered and pure, ensuring it retains essential nutrients and natural antioxidants. From deep frying to stir-frying, NutriSelect Mustard Oil is a perfect choice for everyday cooking, enhancing flavors while promoting wellness.",
      productChoose: "Our mustard oil is crafted with integrity and quality, offering the authentic essence of mustard seeds without any artificial additives. NutriSelect Mustard Oil not only elevates the taste of your dishes but also supports heart health and immunity. It’s a staple for kitchens that prioritize both flavor and health.",
      benefits: [
        "Pure and Naturally Filtered: Naturally Filtered to retain the full nutritional profile and flavor.",
        "Healthy: Supports heart health and overall wellness.",
        "Bold, Authentic Flavor: Adds depth and richness to both traditional and modern recipes.",
        "Ideal for Multiple Cooking Styles: Perfect for sautéing, deep frying, pickling, and more."
      ],
      defaultQuantity:"1Lt",
      images: {
        "1Lt": [litre1, designOil, oilTable, fssai, manufactured],
        "2Lt": [litre2, designOil, oilTable, fssai, manufactured],
        "5Lt": [litre5, litre5Back, oilTable, fssai, manufactured],
        "15Lt": [litre15, litre15Back, oilTable, fssai, manufactured],
      },
      mainImage: litre1
    }
  };
  const product = categories[categoryId];
  const imagesArrays=Object.keys(product.images);
  const quantitySelected=(qty)=>{
    setSelectedQuantity(qty);
    setSelectedImage(product.images[qty][0])
  }
  useEffect(() => {
    setSelectedQuantity(product.defaultQuantity);
    setSelectedImage(product.images[product.defaultQuantity]?.[0]);
  }, [categoryId])


  return (
    <div className="product-container">
      <div className="product-hero">
        <h1 className="product-title animated-text">{product.name}</h1>
      </div>
      <div className="product-grid">
        <div className="product-images">
          <div className="image-frame">
            <img src={selectedImage} alt={product.name} className="main-image" />
          </div>
          <div className="thumbnail-container row no-margin">
            {product.images[selectedQuantity]?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <p className="product-description fade-in-text">{product.description}</p>
          <div className="quantity-wrapper">
          <h2 className="benefits-title slide-in">Select Quantity</h2>
          <div className="quantity-container">
            {imagesArrays?.map((quantity) => (
              <div className={`quantity-pill ${selectedQuantity===quantity?'selected':''}`} onClick={()=>quantitySelected(quantity)}>{quantity}</div>
            ))}
          </div>
          </div>
          <h3 className="benefits-title slide-in">Why Choose This?</h3>
          <p className="product-description fade-in-text">{product.productChoose}</p>
          <ul className="benefits-list">
            {product.benefits.map((benefit, index) => (
              <li key={index} className="benefit-item pop-effect">{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
