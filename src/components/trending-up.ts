import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTrendingUpElement } from '@aracna/icons-feather-web/elements/trending-up-element'

export const IconFeatherTrendingUp: ElementComponent<IconFeatherTrendingUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrendingUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-trending-up', IconFeatherTrendingUpElement)
