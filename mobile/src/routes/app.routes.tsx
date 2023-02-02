import {
	BottomTabNavigationProp,
	createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'
import { House, Tag, User } from 'phosphor-react-native'
import { Platform } from 'react-native'

import { Ad } from '@screens/Ad'
import { AdDetails } from '@screens/AdDetails'
import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'

export type AppRoutes = {
	home: undefined
	ad: undefined
	profile: undefined
	details: { productId: string }
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
	const { colors, sizes } = useTheme()

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: colors.gray[600],
				tabBarInactiveTintColor: colors.gray[300],
				tabBarStyle: {
					borderTopWidth: 0,
					backgroundColor: colors.gray[100],
					height: Platform.OS === 'android' ? 'auto' : 96,
					paddingBottom: sizes[9],
					paddingTop: sizes[7]
				}
			}}
		>
			<Screen
				name="home"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => <House size={sizes[6]} color={color} />
				}}
			/>

			<Screen
				name="ad"
				component={Ad}
				options={{
					tabBarIcon: ({ color }) => <Tag size={sizes[6]} color={color} />
				}}
			/>

			<Screen
				name="profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => <User size={sizes[6]} color={color} />
				}}
			/>

			<Screen
				name="details"
				component={AdDetails}
				options={{ tabBarButton: () => null }}
			/>
		</Navigator>
	)
}
