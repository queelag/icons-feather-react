import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCheckSquareElement } from '@aracna/icons-feather-web/elements/check-square-element'

export const IconFeatherCheckSquare: ElementComponent<IconFeatherCheckSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCheckSquareElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-check-square', IconFeatherCheckSquareElement)
