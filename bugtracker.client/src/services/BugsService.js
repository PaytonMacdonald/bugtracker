import { AppState } from '../AppState'
import { api } from './AxiosService'
import router from '../router.js'

class BugsService {
  async getAllBugs() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async getBugById(id) {
    const res = await api.get('api/bugs/' + id)
    AppState.activeBug = res.data
  }

  async createBug(data) {
    const res = await api.post('api/bugs', data)
    AppState.bugs.push(res.data)
    router.push({ name: 'BugDetails', params: { id: res.data.id } })
  }

  async editBug(data, id) {
    await api.put('api/bugs/' + id, data)
    this.getBugById(id)
  }

  async deleteBug(id) {
    await api.delete('api/bugs/' + id)
    AppState.activeBug.closed = true
  }
}

export const bugsService = new BugsService()
