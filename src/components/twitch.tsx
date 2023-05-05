import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTwitchElement } from '@aracna/icons-feather-web/elements/twitch-element.js'

export const IconFeatherTwitch: ElementComponent<IconFeatherTwitchElement, IconProps> = createBaseElementComponent<
  IconFeatherTwitchElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-twitch', IconFeatherTwitchElement)
