import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMoreVerticalElement } from '@aracna/icons-feather-web/elements/more-vertical-element.js'

export const IconFeatherMoreVertical: ElementComponent<IconFeatherMoreVerticalElement, IconProps> = createBaseElementComponent<
  IconFeatherMoreVerticalElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-more-vertical', IconFeatherMoreVerticalElement)
