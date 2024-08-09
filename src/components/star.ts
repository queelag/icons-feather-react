import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherStarElement } from '@aracna/icons-feather-web/elements/star-element'

export const IconFeatherStar: ElementComponent<IconFeatherStarElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherStarElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-star', IconFeatherStarElement)
