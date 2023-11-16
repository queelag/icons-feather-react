import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherYoutubeElement } from '@aracna/icons-feather-web/elements/youtube-element'

export const IconFeatherYoutube: ElementComponent<IconFeatherYoutubeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherYoutubeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-youtube', IconFeatherYoutubeElement)
