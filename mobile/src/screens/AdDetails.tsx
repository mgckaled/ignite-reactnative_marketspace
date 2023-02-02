import { useNavigation, useRoute } from '@react-navigation/native'
import {
	HStack,
	Heading,
	Image,
	ScrollView,
	Stack,
	Text,
	VStack
} from 'native-base'
import { useEffect, useState } from 'react'
import { Platform } from 'react-native'

import { PRODUCTS } from '../data/products'

import UserPhotoDefault from '@assets/UserPhotoDefault.png'

import { AdHeader } from '@components/AdHeader'
import { UserPhoto } from '@components/UserPhoto'

import { ProductDTO } from '@dtos/ProductDTO'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

export type RouteParamsProps = {
	productId: string
}

export function AdDetails() {
	// navigation
	const navigation = useNavigation<AppNavigatorRoutesProps>()

	// products list
	const [product, setProduct] = useState<ProductDTO>({} as ProductDTO)
	const route = useRoute()
	const { productId } = route.params as RouteParamsProps

	function handleGoBack() {
		navigation.goBack()
	}

	useEffect(() => {
		const selected = PRODUCTS.filter(
			item => item.id === productId
		)[0] as ProductDTO
		setProduct(selected)
	}, [productId])

	return (
		<Stack bg="gray.200" safeArea>
			<AdHeader
				title=""
				bgColor="gray.200"
				hasArrowIcon={true}
				onPressArrow={handleGoBack}
			></AdHeader>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Image
					key={String(new Date().getTime())}
					source={product.image}
					alt="Imagem do Anúncio"
					resizeMode={Platform.OS === 'android' ? 'contain' : 'cover'}
					alignSelf="center"
				/>
				<VStack px={7} mt={5}>
					<HStack alignItems="center">
						<UserPhoto
							source={UserPhotoDefault}
							size={8}
							alt="Imagem do usuário"
							borderWidth={1}
							borderColor="blue.500"
						/>
						<Text pl={5} fontFamily="body" fontSize="md" color="gray.500">
							Marcel Kaled
						</Text>
					</HStack>
					<HStack mt={3} alignItems="center" justifyContent="space-between">
						<Heading fontFamily="body" fontSize="lg" color="gray.500">
							{product.name}
						</Heading>
						<Heading fontFamily="body" fontSize="lg" color="blue.500">
							R$ {product.price}
						</Heading>
					</HStack>
				</VStack>
			</ScrollView>
		</Stack>
	)
}
