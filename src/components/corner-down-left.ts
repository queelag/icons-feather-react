import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerDownLeftElement } from '@aracna/icons-feather-web/elements/corner-down-left-element.js'

export const IconFeatherCornerDownLeft: ElementComponent<IconFeatherCornerDownLeftElement, IconProps> = createBaseElementComponent<
  IconFeatherCornerDownLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-down-left', IconFeatherCornerDownLeftElement)
