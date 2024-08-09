import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPlayElement } from '@aracna/icons-feather-web/elements/play-element'

export const IconFeatherPlay: ElementComponent<IconFeatherPlayElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPlayElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-play', IconFeatherPlayElement)
