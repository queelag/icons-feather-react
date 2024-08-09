import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBarChartElement } from '@aracna/icons-feather-web/elements/bar-chart-element'

export const IconFeatherBarChart: ElementComponent<IconFeatherBarChartElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBarChartElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-bar-chart', IconFeatherBarChartElement)
