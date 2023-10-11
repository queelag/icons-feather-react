import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerRightDownElement } from '@aracna/icons-feather-web/elements/corner-right-down-element'

export const IconFeatherCornerRightDown: ElementComponent<IconFeatherCornerRightDownElement, IconProps> = createBaseElementComponent<
  IconFeatherCornerRightDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-right-down', IconFeatherCornerRightDownElement)
