import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSquareElement } from '@aracna/icons-feather-web/elements/square-element'

export const IconFeatherSquare: ElementComponent<IconFeatherSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSquareElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-square', IconFeatherSquareElement)
