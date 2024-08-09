import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPieChartElement } from '@aracna/icons-feather-web/elements/pie-chart-element'

export const IconFeatherPieChart: ElementComponent<IconFeatherPieChartElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPieChartElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-pie-chart', IconFeatherPieChartElement)
