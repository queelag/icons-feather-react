import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerDownRightElement } from '@aracna/icons-feather-web/elements/corner-down-right-element'

export const IconFeatherCornerDownRight: ElementComponent<IconFeatherCornerDownRightElement, IconProps> = createBaseElementComponent<
  IconFeatherCornerDownRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-down-right', IconFeatherCornerDownRightElement)
