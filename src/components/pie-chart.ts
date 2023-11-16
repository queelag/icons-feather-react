import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPieChartElement } from '@aracna/icons-feather-web/elements/pie-chart-element'

export const IconFeatherPieChart: ElementComponent<IconFeatherPieChartElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPieChartElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-pie-chart', IconFeatherPieChartElement)
