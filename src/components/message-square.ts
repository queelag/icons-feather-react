import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMessageSquareElement } from '@aracna/icons-feather-web/elements/message-square-element'

export const IconFeatherMessageSquare: ElementComponent<IconFeatherMessageSquareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMessageSquareElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-message-square', IconFeatherMessageSquareElement)
