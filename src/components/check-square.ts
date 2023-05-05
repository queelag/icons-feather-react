import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCheckSquareElement } from '@aracna/icons-feather-web/elements/check-square-element.js'

export const IconFeatherCheckSquare: ElementComponent<IconFeatherCheckSquareElement, IconProps> = createBaseElementComponent<
  IconFeatherCheckSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-check-square', IconFeatherCheckSquareElement)
