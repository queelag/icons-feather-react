import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerRightUpElement } from '@aracna/icons-feather-web/elements/corner-right-up-element.js'

export const IconFeatherCornerRightUp: ElementComponent<IconFeatherCornerRightUpElement, IconProps> = createBaseElementComponent<
  IconFeatherCornerRightUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-right-up', IconFeatherCornerRightUpElement)
