import { bugsService } from '../services/BugsService'
import { notesService } from '../services/NotesService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .get('', this.getAllBugs)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getBugById)
      .get('/:id/notes', this.getNotes)
      .post('', this.createBug)
      // .put('/:id', this.editBug)
      .delete('/:id', this.deleteBug)
  }

  async getAllBugs(req, res, next) {
    try {
      const bugs = await bugsService.getAllBugs(req.query) // implement on other controlers
      return res.send(bugs)
    } catch (error) {
      next(error)
    }
  }

  async getBugById(req, res, next) {
    try {
      const bug = await bugsService.getBugById(req.params.id)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getNotes(req, res, next) {
    try {
      const notes = await notesService.getNotes({ creatorId: req.userInfo.id, bug: req.params.id })
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async createBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.createBug(req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  // TODO fix editboard logic
  // async editBug(req, res, next) {
  //   try {
  //     req.body.creatorId = req.userInfo.id
  //     req.body.id = req.params.id
  //     delete req.body.closed
  //     const bug = await bugsService.editBug(req.body)
  //     return res.send(bug)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async deleteBug(req, res, next) {
    try {
      const bugs = await bugsService.deleteBug(req.params.id, req.userInfo.id)
      return res.send(bugs)
    } catch (error) {
      next(error)
    }
  }
}
