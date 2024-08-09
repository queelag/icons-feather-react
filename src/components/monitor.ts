import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMonitorElement } from '@aracna/icons-feather-web/elements/monitor-element'

export const IconFeatherMonitor: ElementComponent<IconFeatherMonitorElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMonitorElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-monitor', IconFeatherMonitorElement)
