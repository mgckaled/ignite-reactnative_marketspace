import { AdHeader } from '@components/AdHeader'
import { Stack, useTheme } from 'native-base'

export function Ad() {
	const { colors } = useTheme()

	return (
		<Stack bg="gray.200" safeArea>
			<AdHeader
				title="Meus Anúncios"
				bgColor={colors.gray[200]}
				hasAddIcon={true}
			></AdHeader>
		</Stack>
	)
}
