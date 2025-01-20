const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

// Thought Schema
const ThoughtSchema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
  createdAt: { type: Date, default: Date.now },
});

// Reaction Schema
const ReactionSchema = new Schema({
  type: { type: String, required: true }, // e.g., "like", "dislike"
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  thought: { type: Schema.Types.ObjectId, ref: 'Thought', required: true },
});

const User = mongoose.model('User', UserSchema);
const Thought = mongoose.model('Thought', ThoughtSchema);
const Reaction = mongoose.model('Reaction', ReactionSchema);

module.exports = { User, Thought, Reaction };