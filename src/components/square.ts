import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSquareElement } from '@aracna/icons-feather-web/elements/square-element'

export const IconFeatherSquare: ElementComponent<IconFeatherSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-square', IconFeatherSquareElement)
