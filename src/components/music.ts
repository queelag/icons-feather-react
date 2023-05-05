import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMusicElement } from '@aracna/icons-feather-web/elements/music-element.js'

export const IconFeatherMusic: ElementComponent<IconFeatherMusicElement, IconProps> = createBaseElementComponent<
  IconFeatherMusicElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-music', IconFeatherMusicElement)
