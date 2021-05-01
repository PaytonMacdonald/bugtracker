import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getNotes(query) {
    const notes = await dbContext.Notes.find(query)
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
    return 'Successfully Closed'
  }
}

export const notesService = new NotesService()
