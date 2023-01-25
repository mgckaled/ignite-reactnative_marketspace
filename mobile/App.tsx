import {
	Karla_400Regular,
	Karla_700Bold,
	useFonts
} from '@expo-google-fonts/karla'
import { NativeBaseProvider } from 'native-base'
import { StatusBar, Text, View } from 'react-native'

import { THEME } from './src/theme'

export default function App() {
	const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })
	return (
		<NativeBaseProvider theme={THEME}>
			<View>
				<StatusBar
					barStyle="dark-content"
					backgroundColor="transparent"
					translucent
				/>
				{fontsLoaded ? <Text>Hello World</Text> : <View />}
			</View>
		</NativeBaseProvider>
	)
}
