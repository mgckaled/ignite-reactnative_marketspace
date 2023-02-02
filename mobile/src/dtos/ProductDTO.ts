import { ImageSourcePropType } from 'react-native'

import { PaymentMethodDTO } from './PaymentMethodDTO'

export type ProductDTO = {
	id: string
	name: string
	description: string
	is_new: boolean
	price: string
	accept_trade: boolean
	payment_methods: PaymentMethodDTO[]
	is_active: boolean
	thumb: ImageSourcePropType
	image: ImageSourcePropType
}
