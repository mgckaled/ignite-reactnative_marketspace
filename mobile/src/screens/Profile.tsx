import { AdHeader } from '@components/AdHeader'
import { Stack, useTheme } from 'native-base'

export function Profile() {
	const { colors } = useTheme()

	return (
		<Stack bg="gray.200" safeArea>
			<AdHeader
				title="   Perfil   "
				bgColor={colors.gray[200]}
				hasSignOutIcon={true}
			></AdHeader>
		</Stack>
	)
}
