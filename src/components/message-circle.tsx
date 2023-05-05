import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMessageCircleElement } from '@aracna/icons-feather-web/elements/message-circle-element.js'

export const IconFeatherMessageCircle: ElementComponent<IconFeatherMessageCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherMessageCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-message-circle', IconFeatherMessageCircleElement)
