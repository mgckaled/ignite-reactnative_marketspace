import { useNavigation } from '@react-navigation/native'
import { Stack, Text, VStack } from 'native-base'
import { useState } from 'react'

import { AdBox } from '@components/AdBox'
import { HomeHeader } from '@components/HomeHeader'
import { Products } from '@components/Products'
import { SearchInput } from '@components/SearchInput'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { ProductDTO } from '@dtos/ProductDTO'

export function Home() {
	// navigation
	const navigation = useNavigation<AppNavigatorRoutesProps>()

	const [products, setProducts] = useState<ProductDTO[]>([])

	function handleOpenAd() {
		navigation.navigate('ad')
	}

	return (
		<Stack bg="gray.200" safeArea>
			<VStack mx={8}>
				<HomeHeader />
				<Text ml={1} mt={2} fontFamily="body" fontSize="sm" color="gray.400">
					Seus produtos anunciados para venda
				</Text>
				<AdBox onPress={handleOpenAd} />
				<Text ml={1} mt={7} fontFamily="body" fontSize="sm" color="gray.400">
					Compre produtos variados
				</Text>
				<SearchInput />
				<Products data={products} />
			</VStack>
		</Stack>
	)
}
