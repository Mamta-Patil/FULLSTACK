import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  item: { type: String, required: true },
  price: { type: Number, required: true },
  purchaseDate: { type: Date, default: Date.now },
});

export default mongoose.models.Purchase || mongoose.model('Purchase', purchaseSchema);