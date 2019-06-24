var mongoose = require('mongoose');

export interface Author{
    _id: String;
    name: String;
}

const authorSchema = new mongoose.Schema({
    name: String,
})

const authorModel = mongoose.model('Author', authorSchema);

export {authorModel};
