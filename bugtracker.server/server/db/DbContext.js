import mongoose from 'mongoose'
import AccountSchema from '../models/Account'
import BugSchema from '../models/Bug'
import NoteSchema from '../models/Note'
import ValueSchema from '../models/Value'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Bugs = mongoose.model('Bug', BugSchema);
  Notes = mongoose.model('Note', NoteSchema);
  Values = mongoose.model('Value', ValueSchema);
}

export const dbContext = new DbContext()
