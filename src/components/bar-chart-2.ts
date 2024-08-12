import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBarChart2Element } from '@aracna/icons-feather-web/elements/bar-chart-2-element'

export const IconFeatherBarChart2: ElementComponent<IconFeatherBarChart2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBarChart2Element,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-bar-chart-2', IconFeatherBarChart2Element)
