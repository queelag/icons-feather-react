import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBarChart2Element } from '@aracna/icons-feather-web/elements/bar-chart-2-element'

export const IconFeatherBarChart2: ElementComponent<IconFeatherBarChart2Element, IconProps> = createBaseElementComponent<
  IconFeatherBarChart2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bar-chart-2', IconFeatherBarChart2Element)
