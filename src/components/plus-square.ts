import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPlusSquareElement } from '@aracna/icons-feather-web/elements/plus-square-element'

export const IconFeatherPlusSquare: ElementComponent<IconFeatherPlusSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPlusSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-plus-square', IconFeatherPlusSquareElement)
