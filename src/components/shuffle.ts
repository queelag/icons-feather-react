import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShuffleElement } from '@aracna/icons-feather-web/elements/shuffle-element'

export const IconFeatherShuffle: ElementComponent<IconFeatherShuffleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShuffleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-shuffle', IconFeatherShuffleElement)
