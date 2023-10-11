import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMoreHorizontalElement } from '@aracna/icons-feather-web/elements/more-horizontal-element'

export const IconFeatherMoreHorizontal: ElementComponent<IconFeatherMoreHorizontalElement, IconProps> = createBaseElementComponent<
  IconFeatherMoreHorizontalElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-more-horizontal', IconFeatherMoreHorizontalElement)
