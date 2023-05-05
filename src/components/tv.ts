import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTvElement } from '@aracna/icons-feather-web/elements/tv-element.js'

export const IconFeatherTv: ElementComponent<IconFeatherTvElement, IconProps> = createBaseElementComponent<
  IconFeatherTvElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-tv', IconFeatherTvElement)
