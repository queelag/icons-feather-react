import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGridElement } from '@aracna/icons-feather-web/elements/grid-element'

export const IconFeatherGrid: ElementComponent<IconFeatherGridElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGridElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-grid', IconFeatherGridElement)
