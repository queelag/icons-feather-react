import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerDownLeftElement } from '@aracna/icons-feather-web/elements/corner-down-left-element'

export const IconFeatherCornerDownLeft: ElementComponent<IconFeatherCornerDownLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerDownLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-down-left', IconFeatherCornerDownLeftElement)
