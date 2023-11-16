import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMonitorElement } from '@aracna/icons-feather-web/elements/monitor-element'

export const IconFeatherMonitor: ElementComponent<IconFeatherMonitorElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMonitorElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-monitor', IconFeatherMonitorElement)
