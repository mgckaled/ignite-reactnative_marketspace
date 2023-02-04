import { ISwitchProps, Switch as SwitchNativeBase } from 'native-base'

type Props = ISwitchProps & {}

export function Switch({ ...rest }: Props) {
	return <SwitchNativeBase size="lg" onTrackColor="blue.500" {...rest} />
}
