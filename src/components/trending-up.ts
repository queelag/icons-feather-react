import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTrendingUpElement } from '@aracna/icons-feather-web/elements/trending-up-element.js'

export const IconFeatherTrendingUp: ElementComponent<IconFeatherTrendingUpElement, IconProps> = createBaseElementComponent<
  IconFeatherTrendingUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-trending-up', IconFeatherTrendingUpElement)
