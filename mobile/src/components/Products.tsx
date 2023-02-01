import { FlatList, VStack } from 'native-base'

import { ProductCard, ProductCardProps } from './ProductCard'

type Props = {
	data: ProductCardProps[]
}

export function Products({ data }: Props) {
	return (
		<VStack>
			<FlatList
				data={data}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <ProductCard data={item} />}
				numColumns={2}
				_contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
				showsVerticalScrollIndicator={false}
			/>
		</VStack>
	)
}
