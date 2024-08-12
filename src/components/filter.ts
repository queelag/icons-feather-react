import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFilterElement } from '@aracna/icons-feather-web/elements/filter-element'

export const IconFeatherFilter: ElementComponent<IconFeatherFilterElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFilterElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-filter', IconFeatherFilterElement)
