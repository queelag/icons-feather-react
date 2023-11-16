import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSearchElement } from '@aracna/icons-feather-web/elements/search-element'

export const IconFeatherSearch: ElementComponent<IconFeatherSearchElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSearchElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-search', IconFeatherSearchElement)
