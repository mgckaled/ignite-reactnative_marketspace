import {
	HStack,
	Heading,
	IPressableProps,
	Pressable,
	Text,
	VStack,
	useTheme
} from 'native-base'
import { ArrowRight, Tag } from 'phosphor-react-native'

export function AdBox({ ...rest }: IPressableProps) {
	const { colors } = useTheme()

	return (
		<Pressable
			h={20}
			mt={3}
			bg="coolGray.200"
			rounded="lg"
			borderWidth={1}
			borderColor="coolGray.300"
			alignItems="center"
			_pressed={{ opacity: 0.8 }}
			{...rest}
		>
			<HStack flex={1} justifyContent="space-between" alignItems="center">
				<Tag size={24} color={colors.blue[500]} />
				<VStack mx={4}>
					<Heading fontFamily="heading" fontSize="lg" color="gray.500">
						4
					</Heading>
					<Text fontFamily="body" fontSize="xs" color="gray.500">
						anúncios ativos
					</Text>
				</VStack>
				<Text mx={3} fontFamily="body" fontSize="sm" color="blue.700">
					Meus anúncios
				</Text>
				<ArrowRight size={24} color={colors.blue[500]} />
			</HStack>
		</Pressable>
	)
}
