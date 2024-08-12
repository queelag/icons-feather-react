import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGridElement } from '@aracna/icons-feather-web/elements/grid-element'

export const IconFeatherGrid: ElementComponent<IconFeatherGridElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGridElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-grid', IconFeatherGridElement)
