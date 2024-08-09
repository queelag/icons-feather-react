import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMoreVerticalElement } from '@aracna/icons-feather-web/elements/more-vertical-element'

export const IconFeatherMoreVertical: ElementComponent<IconFeatherMoreVerticalElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMoreVerticalElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-more-vertical', IconFeatherMoreVerticalElement)
