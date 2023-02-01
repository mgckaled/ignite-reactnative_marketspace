import { useNavigation } from '@react-navigation/native'
import { Heading, Image, Text, VStack } from 'native-base'
import {
	ImageSourcePropType,
	TouchableOpacity,
	TouchableOpacityProps
} from 'react-native'

import { examplePNG } from '@assets/products/bota_thumb.png'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

export type ProductCardProps = {
	id: string
	name: string
	description: string
	price: string
	thumb: ImageSourcePropType
}

type Props = TouchableOpacityProps & {
	data?: ProductCardProps
}

export function ProductCard({ ...rest }: Props) {
	const { navigate } = useNavigation<AppNavigatorRoutesProps>()

	return (
		<TouchableOpacity onPress={() => navigate('details')} {...rest}>
			<VStack w={40} h={24} rounded="lg" bg="gray.300" m={1} p={2}>
				<Image
					source={examplePNG}
					defaultSource={examplePNG}
					alt="Imagem do produto"
					resizeMode="cover"
				/>
			</VStack>

			<VStack>
				<Text ml={2} color="gray.400" fontSize="sm">
					{/* {data.name} */}
					Sofa 1.80m
				</Text>
				<Heading color="gray.700" fontFamily="heading" fontSize="md" ml={2}>
					{/* R$ {data.price} */}
					R$ 99,90
				</Heading>
			</VStack>
		</TouchableOpacity>
	)
}
