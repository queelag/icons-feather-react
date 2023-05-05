import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBellOffElement } from '@aracna/icons-feather-web/elements/bell-off-element.js'

export const IconFeatherBellOff: ElementComponent<IconFeatherBellOffElement, IconProps> = createBaseElementComponent<
  IconFeatherBellOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bell-off', IconFeatherBellOffElement)
