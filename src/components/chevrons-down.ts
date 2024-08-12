import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChevronsDownElement } from '@aracna/icons-feather-web/elements/chevrons-down-element'

export const IconFeatherChevronsDown: ElementComponent<IconFeatherChevronsDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronsDownElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chevrons-down', IconFeatherChevronsDownElement)
