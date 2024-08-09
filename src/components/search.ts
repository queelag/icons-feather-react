import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSearchElement } from '@aracna/icons-feather-web/elements/search-element'

export const IconFeatherSearch: ElementComponent<IconFeatherSearchElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSearchElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-search', IconFeatherSearchElement)
