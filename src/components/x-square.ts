import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherXSquareElement } from '@aracna/icons-feather-web/elements/x-square-element'

export const IconFeatherXSquare: ElementComponent<IconFeatherXSquareElement, IconProps> = createBaseElementComponent<
  IconFeatherXSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-x-square', IconFeatherXSquareElement)
