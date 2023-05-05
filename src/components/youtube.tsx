import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherYoutubeElement } from '@aracna/icons-feather-web/elements/youtube-element.js'

export const IconFeatherYoutube: ElementComponent<IconFeatherYoutubeElement, IconProps> = createBaseElementComponent<
  IconFeatherYoutubeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-youtube', IconFeatherYoutubeElement)
