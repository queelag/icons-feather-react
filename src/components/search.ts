import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSearchElement } from '@aracna/icons-feather-web/elements/search-element'

export const IconFeatherSearch: ElementComponent<IconFeatherSearchElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSearchElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-search', IconFeatherSearchElement)
