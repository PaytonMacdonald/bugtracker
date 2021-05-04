import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugsService {
  async getAllBugs(query = {}) {
    const bugs = await dbContext.Bugs.find(query).populate('creator')
    return bugs
  }

  async getBugById(id) {
    const bug = await dbContext.Bugs.findById(id).populate('creator')
    if (!bug) {
      throw new BadRequest('Invalid Id')
    }
    return bug
  }

  async createBug(body) {
    return await dbContext.Bugs.create(body)
  }

  // TODO fix the logic for the "curve ball" part of postman test
  async editBug(body) {
    const check = await this.getBugById(body.id)
    if (check.closed === false) {
      const data = await dbContext.Bugs.findOneAndUpdate({ _id: body.id }, body, { new: true })
      if (!data) {
        throw new BadRequest('Invalid Id')
      }
      return data
    }
    throw new BadRequest('This bug is closed')
  }

  async deleteBug(bugId, creatorId) {
    const data = await dbContext.Bugs.findOneAndUpdate({ _id: bugId, creatorId }, { closed: true }, { new: true })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return 'Successfully Closed'
  }
}

export const bugsService = new BugsService()
