import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBellElement } from '@aracna/icons-feather-web/elements/bell-element'

export const IconFeatherBell: ElementComponent<IconFeatherBellElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBellElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bell', IconFeatherBellElement)
