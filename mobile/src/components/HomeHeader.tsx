import { HStack, Heading, Text, VStack, useTheme } from 'native-base'

import { Plus } from 'phosphor-react-native'
import { Button } from './Button'
import { UserPhoto } from './UserPhoto'

export function HomeHeader() {
	const { colors } = useTheme()

	return (
		<HStack
			bg="gray.200"
			pt={8}
			pb={5}
			alignItems="center"
			justifyContent="center"
		>
			<UserPhoto
				source={{ uri: 'https://github.com/mgckaled.png' }}
				size={12}
				alt="Imagem do usuário"
				mr={4}
				borderWidth={2}
				borderColor="blue.500"
			/>
			<VStack mr={6}>
				<Text color="gray.500" fontSize="md" fontFamily="body">
					Boas vindas,
				</Text>
				<Heading color="gray.500" fontSize="md" fontFamily="heading">
					Maria!
				</Heading>
			</VStack>
			<Button
				bgColor="gray.700"
				title="Criar anúncio"
				_borderColor="black"
				textColor="gray.100"
				widthSize="45%"
				justifyContent="center"
				alignItems="center"
				leftIcon={<Plus size={20} color={colors.gray[100]} />}
			/>
		</HStack>
	)
}
