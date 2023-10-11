import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMinusSquareElement } from '@aracna/icons-feather-web/elements/minus-square-element'

export const IconFeatherMinusSquare: ElementComponent<IconFeatherMinusSquareElement, IconProps> = createBaseElementComponent<
  IconFeatherMinusSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-minus-square', IconFeatherMinusSquareElement)
