import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTwitchElement } from '@aracna/icons-feather-web/elements/twitch-element'

export const IconFeatherTwitch: ElementComponent<IconFeatherTwitchElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTwitchElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-twitch', IconFeatherTwitchElement)
