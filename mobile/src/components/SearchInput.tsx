import { Pressable, useTheme } from 'native-base'
import { MagnifyingGlass, Sliders } from 'phosphor-react-native'

import { Input } from './Input'

export function SearchInput() {
	const { colors } = useTheme()

	return (
		<Input
			mt={2}
			InputRightElement={
				<Pressable mr={3} h={6} w={6} bg="gray.100" _pressed={{ opacity: 0.6 }}>
					<Sliders size={24} color={colors.gray[600]} />
				</Pressable>
			}
			InputLeftElement={
				<Pressable ml={3} h={6} w={6} bg="gray.100" _pressed={{ opacity: 0.6 }}>
					<MagnifyingGlass size={24} color={colors.gray[600]} />
				</Pressable>
			}
		/>
	)
}
