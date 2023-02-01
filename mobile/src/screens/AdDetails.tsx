import { AdHeader } from '@components/AdHeader'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { ScrollView, Stack } from 'native-base'

export function AdDetails() {
	// navigation
	const navigation = useNavigation<AppNavigatorRoutesProps>()

	function handleGoBack() {
		navigation.goBack()
	}

	return (
		<Stack safeArea>
			<AdHeader
				title=""
				hasArrowIcon={true}
				onPressArrow={handleGoBack}
			></AdHeader>
			<ScrollView showsVerticalScrollIndicator={false}></ScrollView>
		</Stack>
	)
}