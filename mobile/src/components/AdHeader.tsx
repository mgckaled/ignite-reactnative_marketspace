import {
	HStack,
	Heading,
	IPressableProps,
	Pressable,
	Stack,
	useTheme
} from 'native-base'
import {
	ArrowLeft,
	PencilSimpleLine,
	Plus,
	SignOut
} from 'phosphor-react-native'

type Props = IPressableProps & {
	title: string
	bgColor: string
	hasArrowIcon?: boolean
	hasAddIcon?: boolean
	hasEditIcon?: boolean
	hasSignOutIcon?: boolean
	onPressArrow?: () => void
	onPressAdd?: () => void
	onPressEdit?: () => void
	onPressSignOut?: () => void
}

export function AdHeader({
	title,
	bgColor,
	hasArrowIcon = false,
	hasAddIcon = false,
	hasEditIcon = false,
	hasSignOutIcon = false,
	onPressArrow,
	onPressAdd,
	onPressEdit,
	onPressSignOut,
	...rest
}: Props) {
	const { colors } = useTheme()

	return (
		<HStack
			pt={8}
			px={6}
			pb={4}
			bg="gray.100"
			alignItems="center"
			justifyContent="space-around"
			backgroundColor={bgColor}
		>
			{hasArrowIcon === true ? (
				<Pressable
					pr={12}
					_pressed={{ opacity: 0.5 }}
					onPress={onPressArrow}
					{...rest}
				>
					<ArrowLeft size={24} color={colors.gray[700]} />
				</Pressable>
			) : (
				<Pressable pl={10} {...rest}>
					<ArrowLeft size={24} color={bgColor} />
				</Pressable>
			)}

			<Heading px={10} color="gray.700" fontSize="lg" fontFamily="heading">
				{title}
			</Heading>
			{hasAddIcon === true ? (
				<Pressable
					pl={10}
					_pressed={{ opacity: 0.5 }}
					onPress={onPressAdd}
					{...rest}
				>
					<Plus size={24} color={colors.gray[700]} />
				</Pressable>
			) : (
				<Pressable></Pressable>
			)}
			{hasEditIcon === true ? (
				<Pressable _pressed={{ opacity: 0.5 }} onPress={onPressEdit} {...rest}>
					<PencilSimpleLine size={24} color={colors.gray[700]} />
				</Pressable>
			) : (
				<Stack></Stack>
			)}
			{hasSignOutIcon === true ? (
				<Pressable
					_pressed={{ opacity: 0.5 }}
					onPress={onPressSignOut}
					{...rest}
				>
					<SignOut size={24} color={colors.red[400]} />
				</Pressable>
			) : (
				<Stack></Stack>
			)}
		</HStack>
	)
}
