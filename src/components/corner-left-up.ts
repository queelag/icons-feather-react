import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerLeftUpElement } from '@aracna/icons-feather-web/elements/corner-left-up-element'

export const IconFeatherCornerLeftUp: ElementComponent<IconFeatherCornerLeftUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerLeftUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-left-up', IconFeatherCornerLeftUpElement)
