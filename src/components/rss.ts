import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRssElement } from '@aracna/icons-feather-web/elements/rss-element'

export const IconFeatherRss: ElementComponent<IconFeatherRssElement, IconProps> = createBaseElementComponent<
  IconFeatherRssElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-rss', IconFeatherRssElement)
