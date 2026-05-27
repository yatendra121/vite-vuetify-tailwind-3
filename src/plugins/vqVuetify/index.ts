import { _axios } from '@/plugins/axios'

import vqVuetify, {
    updateItemKeyValue,
    updateItemValue,
    deleteItemValue
} from '@qnx/vuetify'
import { setAxiosInstance } from '@qnx/composables/axios'

import VqVuetifyIntegrations, { setConfig } from '@qnx/vuetify/integrations'
import { Portal } from '@/utils/portal'

export { updateItemKeyValue, updateItemValue, deleteItemValue }

export default { vqVuetify, VqVuetifyIntegrations }

setAxiosInstance(_axios)
setConfig({ baseUrl: Portal.getInstance().getBaseUrl() })
