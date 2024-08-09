import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChevronsDownElement } from '@aracna/icons-feather-web/elements/chevrons-down-element'

export const IconFeatherChevronsDown: ElementComponent<IconFeatherChevronsDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronsDownElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chevrons-down', IconFeatherChevronsDownElement)
