import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name:  { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    instructions: { type: String, required: true },
    ingredients: { type: String, required: true },
    isFeatured: { type: Boolean, required: true },
    isAntiAging: { type: Boolean, required: true },
    isAcneControl: { type: Boolean, required: true },
    isEyeTreatment: { type: Boolean, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;