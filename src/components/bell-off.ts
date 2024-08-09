import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBellOffElement } from '@aracna/icons-feather-web/elements/bell-off-element'

export const IconFeatherBellOff: ElementComponent<IconFeatherBellOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBellOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-bell-off', IconFeatherBellOffElement)
