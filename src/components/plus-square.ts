import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPlusSquareElement } from '@aracna/icons-feather-web/elements/plus-square-element.js'

export const IconFeatherPlusSquare: ElementComponent<IconFeatherPlusSquareElement, IconProps> = createBaseElementComponent<
  IconFeatherPlusSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-plus-square', IconFeatherPlusSquareElement)
