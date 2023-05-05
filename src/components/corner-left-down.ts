import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerLeftDownElement } from '@aracna/icons-feather-web/elements/corner-left-down-element.js'

export const IconFeatherCornerLeftDown: ElementComponent<IconFeatherCornerLeftDownElement, IconProps> = createBaseElementComponent<
  IconFeatherCornerLeftDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-left-down', IconFeatherCornerLeftDownElement)
