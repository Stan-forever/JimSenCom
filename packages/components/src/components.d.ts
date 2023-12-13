import * as components from './index'
declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		JimsenButton: typeof components.Button
		// JimsenIcon: typeof components.Icon
	}
}
export {}
