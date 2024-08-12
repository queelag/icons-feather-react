import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMoreVerticalElement } from '@aracna/icons-feather-web/elements/more-vertical-element'

export const IconFeatherMoreVertical: ElementComponent<IconFeatherMoreVerticalElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMoreVerticalElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-more-vertical', IconFeatherMoreVerticalElement)
