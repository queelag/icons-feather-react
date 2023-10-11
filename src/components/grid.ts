import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGridElement } from '@aracna/icons-feather-web/elements/grid-element'

export const IconFeatherGrid: ElementComponent<IconFeatherGridElement, IconProps> = createBaseElementComponent<
  IconFeatherGridElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-grid', IconFeatherGridElement)
