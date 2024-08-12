import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBellElement } from '@aracna/icons-feather-web/elements/bell-element'

export const IconFeatherBell: ElementComponent<IconFeatherBellElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBellElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-bell', IconFeatherBellElement)
