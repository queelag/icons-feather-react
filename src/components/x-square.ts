import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherXSquareElement } from '@aracna/icons-feather-web/elements/x-square-element'

export const IconFeatherXSquare: ElementComponent<IconFeatherXSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherXSquareElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-x-square', IconFeatherXSquareElement)
