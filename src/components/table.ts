import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTableElement } from '@aracna/icons-feather-web/elements/table-element'

export const IconFeatherTable: ElementComponent<IconFeatherTableElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTableElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-table', IconFeatherTableElement)
