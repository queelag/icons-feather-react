import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronsUpElement } from '@aracna/icons-feather-web/elements/chevrons-up-element'

export const IconFeatherChevronsUp: ElementComponent<IconFeatherChevronsUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronsUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevrons-up', IconFeatherChevronsUpElement)
