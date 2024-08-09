import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPlusSquareElement } from '@aracna/icons-feather-web/elements/plus-square-element'

export const IconFeatherPlusSquare: ElementComponent<IconFeatherPlusSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPlusSquareElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-plus-square', IconFeatherPlusSquareElement)
