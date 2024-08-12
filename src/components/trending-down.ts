import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTrendingDownElement } from '@aracna/icons-feather-web/elements/trending-down-element'

export const IconFeatherTrendingDown: ElementComponent<IconFeatherTrendingDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrendingDownElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-trending-down', IconFeatherTrendingDownElement)
