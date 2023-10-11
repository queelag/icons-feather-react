import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerLeftUpElement } from '@aracna/icons-feather-web/elements/corner-left-up-element'

export const IconFeatherCornerLeftUp: ElementComponent<IconFeatherCornerLeftUpElement, IconProps> = createBaseElementComponent<
  IconFeatherCornerLeftUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-left-up', IconFeatherCornerLeftUpElement)
