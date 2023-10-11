import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSearchElement } from '@aracna/icons-feather-web/elements/search-element'

export const IconFeatherSearch: ElementComponent<IconFeatherSearchElement, IconProps> = createBaseElementComponent<
  IconFeatherSearchElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-search', IconFeatherSearchElement)
