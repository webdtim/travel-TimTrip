import $api from 'utils/http/settings'
import { AxiosResponse } from 'axios'
import { TChecklist } from 'types/ui/checklist'

export default class PlanService {
  static async SaveChanges(list: TChecklist): Promise<AxiosResponse> {
    return $api.post('/plan/', list)
  }
}
