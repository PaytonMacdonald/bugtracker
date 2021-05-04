import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getAllNotes(query) {
    const notes = await dbContext.Notes.find(query).populate('creator')
    return notes
  }

  async createNote(body) {
    return await dbContext.Notes.create(body)
  }

  async deleteNote(id, creatorId) {
    const notes = await dbContext.Notes.findOneAndDelete({ _id: id, creatorId })
    if (!notes) {
      throw new BadRequest('Invalid Id')
    }
    return 'Successfully Deleted'
  }
}

export const notesService = new NotesService()
