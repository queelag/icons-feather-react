import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherRssElement } from '@aracna/icons-feather-web/elements/rss-element'

export const IconFeatherRss: ElementComponent<IconFeatherRssElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRssElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-rss', IconFeatherRssElement)
