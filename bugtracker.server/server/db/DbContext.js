import mongoose from 'mongoose'
import BugSchema from '../models/Bug'
import NoteSchema from '../models/Note'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'

class DbContext {
  Bugs = mongoose.model('Bug', BugSchema);
  Notes = mongoose.model('Note', NoteSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
