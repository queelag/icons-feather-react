import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMessageSquareElement } from '@aracna/icons-feather-web/elements/message-square-element'

export const IconFeatherMessageSquare: ElementComponent<IconFeatherMessageSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMessageSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-message-square', IconFeatherMessageSquareElement)
