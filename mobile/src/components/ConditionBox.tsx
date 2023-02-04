import { Box, IBoxProps, Text } from 'native-base'

type Props = IBoxProps & {
	title: 'NOVO' | 'USADO'
}

export function ConditionBox({ title, ...rest }: Props) {
	return (
		<Box
			px={1}
			h={6}
			w={title === 'NOVO' ? 14 : 16}
			rounded="3xl"
			bg={title === 'NOVO' ? 'blue.500' : 'gray.300'}
			alignItems="center"
			justifyContent="center"
			{...rest}
		>
			<Text
				fontFamily="heading"
				fontSize="xs"
				color={title === 'NOVO' ? 'gray.100' : 'gray.700'}
			>
				{title}
			</Text>
		</Box>
	)
}
