import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCheckSquareElement } from '@aracna/icons-feather-web/elements/check-square-element'

export const IconFeatherCheckSquare: ElementComponent<IconFeatherCheckSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCheckSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-check-square', IconFeatherCheckSquareElement)
