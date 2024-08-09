import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMusicElement } from '@aracna/icons-feather-web/elements/music-element'

export const IconFeatherMusic: ElementComponent<IconFeatherMusicElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMusicElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-music', IconFeatherMusicElement)
