import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShuffleElement } from '@aracna/icons-feather-web/elements/shuffle-element.js'

export const IconFeatherShuffle: ElementComponent<IconFeatherShuffleElement, IconProps> = createBaseElementComponent<
  IconFeatherShuffleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-shuffle', IconFeatherShuffleElement)
