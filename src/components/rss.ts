import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRssElement } from '@aracna/icons-feather-web/elements/rss-element'

export const IconFeatherRss: ElementComponent<IconFeatherRssElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRssElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-rss', IconFeatherRssElement)
