import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBookmarkElement } from '@aracna/icons-feather-web/elements/bookmark-element.js'

export const IconFeatherBookmark: ElementComponent<IconFeatherBookmarkElement, IconProps> = createBaseElementComponent<
  IconFeatherBookmarkElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bookmark', IconFeatherBookmarkElement)
