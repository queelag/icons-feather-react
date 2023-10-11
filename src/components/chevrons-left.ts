import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronsLeftElement } from '@aracna/icons-feather-web/elements/chevrons-left-element'

export const IconFeatherChevronsLeft: ElementComponent<IconFeatherChevronsLeftElement, IconProps> = createBaseElementComponent<
  IconFeatherChevronsLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevrons-left', IconFeatherChevronsLeftElement)
