import {
	Center,
	Image,
	Pressable,
	ScrollView,
	Stack,
	Text,
	VStack,
	useTheme
} from 'native-base'
import { Eye, EyeSlash } from 'phosphor-react-native'
import { useState } from 'react'

import logoImgPng from '@assets/logo.png'

import { Button } from '@components/Button'
import { Input } from '@components/Input'

export function SignUp() {
	// Input Icon - Eye EyeSlash
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const THEME = useTheme()

	return (
		<Stack flex={1} safeArea>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				showsVerticalScrollIndicator={false}
			>
				<Stack bg="gray.100">
					<VStack mx={10} mt={12} mb={20} justifyContent="center">
						<Center>
							<Image
								source={logoImgPng}
								alt="logo do app"
								resizeMode="contain"
								size={20}
							/>
							<Text fontFamily="heading" fontSize="lg">
								Boas vindas!
							</Text>
							<Text
								mb={4}
								fontFamily="body"
								fontSize="sm"
								color="gray.400"
								textAlign="center"
							>
								Crie sua conta e use o espaço para comprar itens variados e
								vender seus produtos
							</Text>

							<Input placeholder="Nome" />
							<Input placeholder="Email" />
							<Input placeholder="Telefone" />
							<Input
								placeholder="Senha"
								type={showPassword ? 'text' : 'password'}
								InputRightElement={
									<Pressable
										mr={4}
										onPress={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<Eye color={THEME.colors.gray[400]} size={24} />
										) : (
											<EyeSlash color={THEME.colors.gray[400]} size={24} />
										)}
									</Pressable>
								}
							/>
							<Input
								placeholder="Confirmar senha"
								type={showConfirmPassword ? 'text' : 'password'}
								InputRightElement={
									<Pressable
										mr={4}
										onPress={() => setShowConfirmPassword(!showConfirmPassword)}
									>
										{showConfirmPassword ? (
											<Eye color={THEME.colors.gray[400]} size={24} />
										) : (
											<EyeSlash color={THEME.colors.gray[400]} size={24} />
										)}
									</Pressable>
								}
							/>
							<Button
								mt={3}
								title="Criar"
								bgColor="gray.700"
								_borderColor="black"
								textColor="gray.100"
							/>

							<Text
								mt={16}
								fontFamily="body"
								fontSize="sm"
								color="gray.400"
								textAlign="center"
							>
								já tem uma conta?
							</Text>
							<Button
								mt={4}
								title="Ir para o login"
								bgColor="gray.300"
								_borderColor="gray.400"
								textColor="gray.600"
							/>
						</Center>
					</VStack>
				</Stack>
			</ScrollView>
		</Stack>
	)
}
