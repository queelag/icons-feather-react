import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMessageSquareElement } from '@aracna/icons-feather-web/elements/message-square-element.js'

export const IconFeatherMessageSquare: ElementComponent<IconFeatherMessageSquareElement, IconProps> = createBaseElementComponent<
  IconFeatherMessageSquareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-message-square', IconFeatherMessageSquareElement)
