import mongoose from 'mongoose';
import { Database } from './database.js';

class MongoDbDatabase extends Database {
  async create(Model, item) {
    const doc = new Model(item);
    await doc.save();
    return doc;
  }

  async getById(Model, id,populate=null) {
    if(populate){
      return await Model.findById(id).populate(populate);
    }else{
      return await Model.findById(id);
    }
  }

  async get(Model, query = {}, projection = {}, options = {},populate=null) {
    if(populate){
      return await Model.find(query, projection, options).populate(populate);
    }else{
      return await Model.find(query, projection, options);
    }

  }

  async update(Model, id, item) {
    return await Model.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(Model, id) {
    return await Model.findByIdAndDelete(id);
  }
}

export { MongoDbDatabase };
