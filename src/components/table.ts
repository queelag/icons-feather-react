import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTableElement } from '@aracna/icons-feather-web/elements/table-element'

export const IconFeatherTable: ElementComponent<IconFeatherTableElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTableElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-table', IconFeatherTableElement)
