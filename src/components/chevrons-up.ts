import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChevronsUpElement } from '@aracna/icons-feather-web/elements/chevrons-up-element'

export const IconFeatherChevronsUp: ElementComponent<IconFeatherChevronsUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronsUpElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chevrons-up', IconFeatherChevronsUpElement)
