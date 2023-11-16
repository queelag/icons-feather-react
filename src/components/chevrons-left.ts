import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronsLeftElement } from '@aracna/icons-feather-web/elements/chevrons-left-element'

export const IconFeatherChevronsLeft: ElementComponent<IconFeatherChevronsLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronsLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevrons-left', IconFeatherChevronsLeftElement)
