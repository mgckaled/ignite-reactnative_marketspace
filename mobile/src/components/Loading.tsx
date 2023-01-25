import { Center, Spinner } from 'native-base'

type LoadingProps = {
	spinnerColor: string
}

export function Loading({ spinnerColor }: LoadingProps) {
	return (
		<Center flex={1} bg="transparent">
			<Spinner color={spinnerColor} />
		</Center>
	)
}
