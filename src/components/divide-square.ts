import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDivideSquareElement } from '@aracna/icons-feather-web/elements/divide-square-element.js'

export const IconFeatherDivideSquare: ElementComponent<IconFeatherDivideSquareElement, IconProps> = createBaseElementComponent<
  IconFeatherDivideSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-divide-square', IconFeatherDivideSquareElement)
