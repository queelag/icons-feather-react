import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTwitchElement } from '@aracna/icons-feather-web/elements/twitch-element'

export const IconFeatherTwitch: ElementComponent<IconFeatherTwitchElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTwitchElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-twitch', IconFeatherTwitchElement)
