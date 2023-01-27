import { useNavigation } from '@react-navigation/native'
import { Stack, Text, VStack } from 'native-base'

import { AdBox } from '@components/AdBox'
import { HomeHeader } from '@components/HomeHeader'

import { Input } from '@components/Input'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { MagnifyingGlass, Sliders } from 'phosphor-react-native'
import { Pressable } from 'react-native'

export function Home() {
	// navigation
	const navigation = useNavigation<AppNavigatorRoutesProps>()

	function handleOpenAd() {
		navigation.navigate('ad')
	}

	return (
		<Stack flex={1} bg="gray.200" safeArea>
			<VStack mx={8}>
				<HomeHeader />
				<Text ml={1} mt={2} fontFamily="body" fontSize="sm" color="gray.400">
					Seus produtos anunciados para venda
				</Text>
				<AdBox onPress={handleOpenAd} />
				<Text ml={1} mt={7} fontFamily="body" fontSize="sm" color="gray.400">
					Compre produtos variados
				</Text>
				<Input
					mt={2}
					InputRightElement={
						<Pressable style={{ marginRight: 15 }}>
							<Sliders size={24} />
						</Pressable>
					}
					InputLeftElement={
						<Pressable style={{ marginLeft: 15 }}>
							<MagnifyingGlass size={24} />
						</Pressable>
					}
				/>
			</VStack>
		</Stack>
	)
}
