import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTrendingUpElement } from '@aracna/icons-feather-web/elements/trending-up-element'

export const IconFeatherTrendingUp: ElementComponent<IconFeatherTrendingUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrendingUpElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-trending-up', IconFeatherTrendingUpElement)
