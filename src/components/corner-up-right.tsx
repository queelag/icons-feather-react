import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerUpRightElement } from '@aracna/icons-feather-web/elements/corner-up-right-element.js'

export const IconFeatherCornerUpRight: ElementComponent<IconFeatherCornerUpRightElement, IconProps> = createBaseElementComponent<
  IconFeatherCornerUpRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-up-right', IconFeatherCornerUpRightElement)
