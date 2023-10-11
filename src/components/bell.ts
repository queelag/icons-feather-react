import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBellElement } from '@aracna/icons-feather-web/elements/bell-element'

export const IconFeatherBell: ElementComponent<IconFeatherBellElement, IconProps> = createBaseElementComponent<
  IconFeatherBellElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bell', IconFeatherBellElement)
