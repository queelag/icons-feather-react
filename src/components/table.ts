import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTableElement } from '@aracna/icons-feather-web/elements/table-element'

export const IconFeatherTable: ElementComponent<IconFeatherTableElement, IconProps> = createBaseElementComponent<
  IconFeatherTableElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-table', IconFeatherTableElement)
