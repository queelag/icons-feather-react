import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFilterElement } from '@aracna/icons-feather-web/elements/filter-element'

export const IconFeatherFilter: ElementComponent<IconFeatherFilterElement, IconProps> = createBaseElementComponent<
  IconFeatherFilterElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-filter', IconFeatherFilterElement)
