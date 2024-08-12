import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBarChartElement } from '@aracna/icons-feather-web/elements/bar-chart-element'

export const IconFeatherBarChart: ElementComponent<IconFeatherBarChartElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBarChartElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-bar-chart', IconFeatherBarChartElement)
