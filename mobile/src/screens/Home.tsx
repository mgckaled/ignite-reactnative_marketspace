import { Stack, VStack } from 'native-base'

import { HomeHeader } from '@components/HomeHeader'

export function Home() {
	return (
		<Stack flex={1} bg="gray.200" safeArea>
			<VStack mx={6}>
				<HomeHeader />
			</VStack>
		</Stack>
	)
}
