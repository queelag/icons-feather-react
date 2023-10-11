import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPlayElement } from '@aracna/icons-feather-web/elements/play-element'

export const IconFeatherPlay: ElementComponent<IconFeatherPlayElement, IconProps> = createBaseElementComponent<
  IconFeatherPlayElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-play', IconFeatherPlayElement)
