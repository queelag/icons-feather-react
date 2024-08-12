import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTvElement } from '@aracna/icons-feather-web/elements/tv-element'

export const IconFeatherTv: ElementComponent<IconFeatherTvElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTvElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-tv', IconFeatherTvElement)
