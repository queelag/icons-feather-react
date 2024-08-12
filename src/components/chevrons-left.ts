import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChevronsLeftElement } from '@aracna/icons-feather-web/elements/chevrons-left-element'

export const IconFeatherChevronsLeft: ElementComponent<IconFeatherChevronsLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronsLeftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chevrons-left', IconFeatherChevronsLeftElement)
