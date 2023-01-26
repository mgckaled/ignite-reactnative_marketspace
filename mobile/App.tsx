import {
	Karla_400Regular,
	Karla_700Bold,
	useFonts
} from '@expo-google-fonts/karla'
import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'

import { THEME } from './src/theme'

import { Loading } from '@components/Loading'

import { Routes } from '@routes/index'

export default function App() {
	const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoaded ? <Routes /> : <Loading spinnerColor="blue.700" />}
		</NativeBaseProvider>
	)
}
