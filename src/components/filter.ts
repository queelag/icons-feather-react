import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFilterElement } from '@aracna/icons-feather-web/elements/filter-element'

export const IconFeatherFilter: ElementComponent<IconFeatherFilterElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFilterElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-filter', IconFeatherFilterElement)
