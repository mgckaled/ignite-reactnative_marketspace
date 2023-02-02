import { Heading, Image, Text, VStack } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { ProductDTO } from '@dtos/ProductDTO'

type Props = TouchableOpacityProps & {
	data: ProductDTO
}

export function ProductCard({ data, ...rest }: Props) {
	return (
		<TouchableOpacity {...rest}>
			<VStack w={40} h={24} rounded="lg" bg="gray.300" m={1} p={2}>
				<Image source={data.thumb} alt="Imagem do produto" resizeMode="cover" />
			</VStack>

			<VStack>
				<Text ml={2} color="gray.400" fontSize="sm">
					{data.name}
				</Text>
				<Heading color="gray.700" fontFamily="heading" fontSize="md" ml={2}>
					R$ {data.price}
				</Heading>
			</VStack>
		</TouchableOpacity>
	)
}
