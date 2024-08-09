import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFilterElement } from '@aracna/icons-feather-web/elements/filter-element'

export const IconFeatherFilter: ElementComponent<IconFeatherFilterElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFilterElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-filter', IconFeatherFilterElement)
