import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDivideSquareElement } from '@aracna/icons-feather-web/elements/divide-square-element'

export const IconFeatherDivideSquare: ElementComponent<IconFeatherDivideSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDivideSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-divide-square', IconFeatherDivideSquareElement)
