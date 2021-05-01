import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      // .put('/:id', this.editAccount)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> I wanna change a profile's name (it defaults to email)
  // async editAccount(req, res, next) {
  //   try {
  //     req.body.id = req.userInfo.id
  //     req.body.id = req.params.id
  //     const account = await accountService.editAccount(req.body)
  //     return res.send(account)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}
