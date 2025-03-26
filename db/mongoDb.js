import mongoose from 'mongoose';
import { Database } from './database';

class MongoDbDatabase extends Database {
  async create(model, item) {
    const Model = mongoose.model(model); 
    const doc = new Model(item);
    await doc.save();
    return doc;
  }

  async getById(model, id) {
    const Model = mongoose.model(model); 
    return await Model.findById(id);
  }

  async get(model, query = {}, projection = {}, options = {}) {
    const Model = mongoose.model(model);
    return await Model.find(query, projection, options);
  }

  async update(model, id, item) {
    const Model = mongoose.model(model); 
    return await Model.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(model, id) {
    const Model = mongoose.model(model); 
    await Model.findByIdAndDelete(id);
  }
}

export { MongoDbDatabase };
