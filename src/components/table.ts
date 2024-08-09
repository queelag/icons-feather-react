import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTableElement } from '@aracna/icons-feather-web/elements/table-element'

export const IconFeatherTable: ElementComponent<IconFeatherTableElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTableElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-table', IconFeatherTableElement)
