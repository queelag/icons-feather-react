import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherXSquareElement } from '@aracna/icons-feather-web/elements/x-square-element'

export const IconFeatherXSquare: ElementComponent<IconFeatherXSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherXSquareElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-x-square', IconFeatherXSquareElement)
