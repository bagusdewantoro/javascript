'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const TodoSchema = new Schema({
        text: {
            type:String,
            required: true
        },
        status:{
            type:Boolean,
            default: false,
            required:true
        },
        createdOn: {
            type:Date,
            default:Date.now
        }
    });

// create and export model
module.exports = mongoose.model("todoModel", TodoSchema);
