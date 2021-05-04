import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
    // TODO auth0 keeps 401 blocking
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNote)
      .delete('/:id', this.deleteNote)
  }

  async createNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = await notesService.createNote(req.body)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async deleteNote(req, res, next) {
    try {
      const note = await notesService.deleteNote(req.params.id, req.userInfo.id)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }
}
