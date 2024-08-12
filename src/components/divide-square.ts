import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDivideSquareElement } from '@aracna/icons-feather-web/elements/divide-square-element'

export const IconFeatherDivideSquare: ElementComponent<IconFeatherDivideSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDivideSquareElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-divide-square', IconFeatherDivideSquareElement)
