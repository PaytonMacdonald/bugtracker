import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Bug = new Schema(
  {
    closed: { type: Boolean, required: true, default: false },
    description: { type: String, required: true },
    title: { type: String, required: true },
    closedDate: { type: Date },
    creatorId: { type: String, ref: 'Account', required: true } // "ref Account" is not on the example???
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// NOTE this builds the creator Id /////////////////
Bug.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
// /////////////////////////////////////////////////

export default Bug
