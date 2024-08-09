import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCornerLeftUpElement } from '@aracna/icons-feather-web/elements/corner-left-up-element'

export const IconFeatherCornerLeftUp: ElementComponent<IconFeatherCornerLeftUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerLeftUpElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-corner-left-up', IconFeatherCornerLeftUpElement)
