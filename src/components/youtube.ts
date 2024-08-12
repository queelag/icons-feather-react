import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherYoutubeElement } from '@aracna/icons-feather-web/elements/youtube-element'

export const IconFeatherYoutube: ElementComponent<IconFeatherYoutubeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherYoutubeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-youtube', IconFeatherYoutubeElement)
