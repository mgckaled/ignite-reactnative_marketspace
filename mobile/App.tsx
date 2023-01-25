import {
	Karla_400Regular,
	Karla_700Bold,
	useFonts
} from '@expo-google-fonts/karla'
import { NativeBaseProvider } from 'native-base'
import { Text, View } from 'react-native'

export default function App() {
	const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })
	return (
		<NativeBaseProvider>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				{fontsLoaded ? <Text>Hello World</Text> : <View />}
			</View>
		</NativeBaseProvider>
	)
}
