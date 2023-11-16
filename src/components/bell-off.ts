import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBellOffElement } from '@aracna/icons-feather-web/elements/bell-off-element'

export const IconFeatherBellOff: ElementComponent<IconFeatherBellOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBellOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bell-off', IconFeatherBellOffElement)
