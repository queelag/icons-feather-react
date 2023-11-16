import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBookmarkElement } from '@aracna/icons-feather-web/elements/bookmark-element'

export const IconFeatherBookmark: ElementComponent<IconFeatherBookmarkElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBookmarkElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bookmark', IconFeatherBookmarkElement)
