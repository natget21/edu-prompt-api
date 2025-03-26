import mongoose from 'mongoose';
import { Database } from './database.js';

class MongoDbDatabase extends Database {
  async create(Model, item) {
    const doc = new Model(item);
    await doc.save();
    return doc;
  }

  async getById(Model, id) {
    return await Model.findById(id);
  }

  async get(Model, query = {}, projection = {}, options = {}) {
    return await Model.find(query, projection, options);
  }

  async update(Model, id, item) {
    return await Model.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(Model, id) {
    return await Model.findByIdAndDelete(id);
  }
}

export { MongoDbDatabase };
