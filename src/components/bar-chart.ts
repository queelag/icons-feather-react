import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBarChartElement } from '@aracna/icons-feather-web/elements/bar-chart-element'

export const IconFeatherBarChart: ElementComponent<IconFeatherBarChartElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBarChartElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bar-chart', IconFeatherBarChartElement)
