import { IInputProps, Input as NativeBaseInput, useTheme } from 'native-base'

export function Input({ ...rest }: IInputProps) {
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
				backgroundColor: 'gray.200',
				borderWidth: 1,
				borderColor: 'gray.600'
			}}
			{...rest}
		/>
	)
}