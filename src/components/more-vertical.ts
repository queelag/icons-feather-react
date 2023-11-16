import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMoreVerticalElement } from '@aracna/icons-feather-web/elements/more-vertical-element'

export const IconFeatherMoreVertical: ElementComponent<IconFeatherMoreVerticalElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMoreVerticalElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-more-vertical', IconFeatherMoreVerticalElement)
