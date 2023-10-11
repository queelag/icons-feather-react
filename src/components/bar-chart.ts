import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBarChartElement } from '@aracna/icons-feather-web/elements/bar-chart-element'

export const IconFeatherBarChart: ElementComponent<IconFeatherBarChartElement, IconProps> = createBaseElementComponent<
  IconFeatherBarChartElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bar-chart', IconFeatherBarChartElement)
