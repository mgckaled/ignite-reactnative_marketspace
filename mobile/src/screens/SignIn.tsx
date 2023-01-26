import {
	Center,
	Image,
	Pressable,
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

export function SignIn() {
	// Input Icon
	const [showPassword, setShowPassword] = useState(false)
	const THEME = useTheme()

	return (
		<Stack flex={1} safeArea>
			<Stack bg="gray.100" roundedBottom={32}>
				<VStack mx={10} mt={16} mb={20} justifyContent="center">
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
						<Text mb={4} fontFamily="body" fontSize="sm" color="gray.400">
							seu espaço de compra e venda
						</Text>
						<Text
							mt={12}
							mb={3}
							fontFamily="body"
							fontSize="sm"
							color="gray.500"
						>
							Acesse sua conta
						</Text>
						<Input mb={4} placeholder="Email" />
						<Input
							mb={4}
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
						<Button
							title="Entrar"
							bgColor="blue.500"
							_borderColor="blue.700"
							textColor="gray.100"
						/>
					</Center>
				</VStack>
			</Stack>
			<VStack mx={10} mt={12} justifyContent="center">
				<Center>
					<Text fontFamily="body" fontSize="sm" color="gray.500">
						Ainda não tem acesso?
					</Text>
					<Button
						mt={4}
						title="Criar uma conta"
						bgColor="gray.300"
						_borderColor="gray.400"
						textColor="gray.600"
					/>
				</Center>
			</VStack>
		</Stack>
	)
}
