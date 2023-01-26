import { IInputProps, Input as NativeBaseInput, useTheme } from 'native-base'

type Props = IInputProps & {
	focusBc: 'gray.100' | 'gray.200'
}

export function Input({ focusBc, ...rest }: Props) {
	const theme = useTheme()

	return (
		<NativeBaseInput
			bg="gray.100"
			h={12}
			px={4}
			borderWidth={1}
			borderColor="gray.400"
			borderRadius="md"
			fontSize="md"
			color="gray.600"
			fontFamily="body"
			mb={4}
			placeholderTextColor="gray.300"
			cursorColor="gray.600"
			selectionColor="gray.600"
			_focus={{
				backgroundColor: focusBc,
				borderWidth: 1,
				borderColor: 'gray.600'
			}}
			{...rest}
		/>
	)
}
