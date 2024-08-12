import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBookmarkElement } from '@aracna/icons-feather-web/elements/bookmark-element'

export const IconFeatherBookmark: ElementComponent<IconFeatherBookmarkElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBookmarkElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-bookmark', IconFeatherBookmarkElement)
