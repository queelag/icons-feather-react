import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerLeftDownElement } from '@aracna/icons-feather-web/elements/corner-left-down-element'

export const IconFeatherCornerLeftDown: ElementComponent<IconFeatherCornerLeftDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerLeftDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-left-down', IconFeatherCornerLeftDownElement)
