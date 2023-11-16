import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTvElement } from '@aracna/icons-feather-web/elements/tv-element'

export const IconFeatherTv: ElementComponent<IconFeatherTvElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTvElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-tv', IconFeatherTvElement)
