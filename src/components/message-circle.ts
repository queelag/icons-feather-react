import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMessageCircleElement } from '@aracna/icons-feather-web/elements/message-circle-element'

export const IconFeatherMessageCircle: ElementComponent<IconFeatherMessageCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMessageCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-message-circle', IconFeatherMessageCircleElement)
