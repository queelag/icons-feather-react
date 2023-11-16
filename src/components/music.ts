import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMusicElement } from '@aracna/icons-feather-web/elements/music-element'

export const IconFeatherMusic: ElementComponent<IconFeatherMusicElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMusicElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-music', IconFeatherMusicElement)
