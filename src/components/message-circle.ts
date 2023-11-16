import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMessageCircleElement } from '@aracna/icons-feather-web/elements/message-circle-element'

export const IconFeatherMessageCircle: ElementComponent<IconFeatherMessageCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMessageCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-message-circle', IconFeatherMessageCircleElement)
