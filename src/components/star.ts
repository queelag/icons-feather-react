import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherStarElement } from '@aracna/icons-feather-web/elements/star-element'

export const IconFeatherStar: ElementComponent<IconFeatherStarElement, IconProps> = createBaseElementComponent<
  IconFeatherStarElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-star', IconFeatherStarElement)
