const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            
        }
    }
)