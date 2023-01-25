import { Center, Image, Stack, Text, VStack } from 'native-base'

import logoImgPng from '@assets/logo.png'

export function SignIn() {
	return (
		<Stack flex={1} safeArea>
			<VStack flex={1} bg="gray.100" justifyContent="center" roundedBottom={32}>
				<Center>
					<Image
						source={logoImgPng}
						alt="logo do app"
						resizeMode="contain"
						size={32}
					/>
					<Text fontFamily="heading" fontSize="2xl">
						marketspace
					</Text>
					<Text fontFamily="body" fontSize="sm" color="gray.400">
						seu espaço de compra e venda
					</Text>
					<Text mt={12} fontFamily="body" fontSize="sm" color="gray.500">
						Acesse sua conta
					</Text>
				</Center>
			</VStack>
			<VStack>
				<Center>
					<Text mt={16} fontFamily="body" fontSize="sm" color="gray.500">
						Ainda não tem acesso?
					</Text>
				</Center>
			</VStack>
		</Stack>
	)
}
