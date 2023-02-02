import { useNavigation } from '@react-navigation/native'
import { FlatList, VStack } from 'native-base'

import { ProductDTO } from '@dtos/ProductDTO'
import { ProductCard } from './ProductCard'

type Props = {
	data: ProductDTO[]
}

export function Products({ data }: Props) {
	// navigation
	const { navigate } = useNavigation()

	return (
		<VStack>
			<FlatList
				data={data}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<ProductCard
						data={item}
						onPress={() => navigate('details', { productId: item.id })}
					/>
				)}
				numColumns={2}
				_contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
				showsVerticalScrollIndicator={false}
			/>
		</VStack>
	)
}
