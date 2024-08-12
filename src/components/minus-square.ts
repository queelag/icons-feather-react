import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMinusSquareElement } from '@aracna/icons-feather-web/elements/minus-square-element'

export const IconFeatherMinusSquare: ElementComponent<IconFeatherMinusSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMinusSquareElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-minus-square', IconFeatherMinusSquareElement)
