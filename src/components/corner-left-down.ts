import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCornerLeftDownElement } from '@aracna/icons-feather-web/elements/corner-left-down-element'

export const IconFeatherCornerLeftDown: ElementComponent<IconFeatherCornerLeftDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerLeftDownElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-corner-left-down', IconFeatherCornerLeftDownElement)
