import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherShuffleElement } from '@aracna/icons-feather-web/elements/shuffle-element'

export const IconFeatherShuffle: ElementComponent<IconFeatherShuffleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShuffleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-shuffle', IconFeatherShuffleElement)
