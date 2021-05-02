import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugsService {
  async getAllBugs(query = {}) {
    const bugs = await dbContext.Bugs.find(query)
    return bugs
  }

  async getBugById(query) {
    const bug = await dbContext.Bugs.findOne(query)
    return bug
  }

  async createBug(body) {
    return await dbContext.Bugs.create(body)
  }

  // TODO fix the logic for the "curve ball" part of postman test
  // async editBug(body) {
  //   const check = this.getBugById(body.id)
  //   if (check.closed === false) { throw new BadRequest('did this connect?') }
  //   if (check.closed === false) {
  //   const data = await dbContext.Bugs.findOneAndUpdate({ _id: body.id }, body, { new: true })
  //   if (!data) {
  //     throw new BadRequest('Invalid Id')
  //   }
  //   return data
  //   }
  //   throw new BadRequest('This bug is closed')
  // }

  async deleteBug(bugId, creatorId) {
    const data = await dbContext.Bugs.findOneAndUpdate({ _id: bugId, creatorId }, { closed: true }, { new: true })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return 'Successfully Closed'
  }
}

export const bugsService = new BugsService()
