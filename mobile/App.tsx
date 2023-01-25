import {
	Karla_400Regular,
	Karla_700Bold,
	useFonts
} from '@expo-google-fonts/karla'
import { NativeBaseProvider } from 'native-base'
import { StatusBar, Text } from 'react-native'

import { Loading } from '@components/Loading'
import { THEME } from './src/theme'

export default function App() {
	const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })
	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoaded ? (
				<Text>Hello World</Text>
			) : (
				<Loading spinnerColor="blue.700" />
			)}
		</NativeBaseProvider>
	)
}
