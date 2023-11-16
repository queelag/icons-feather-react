import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTrendingDownElement } from '@aracna/icons-feather-web/elements/trending-down-element'

export const IconFeatherTrendingDown: ElementComponent<IconFeatherTrendingDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrendingDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-trending-down', IconFeatherTrendingDownElement)
