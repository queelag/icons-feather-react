import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMonitorElement } from '@aracna/icons-feather-web/elements/monitor-element.js'

export const IconFeatherMonitor: ElementComponent<IconFeatherMonitorElement, IconProps> = createBaseElementComponent<
  IconFeatherMonitorElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-monitor', IconFeatherMonitorElement)
