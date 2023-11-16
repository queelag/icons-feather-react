import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherWifiOffElement } from '@aracna/icons-feather-web/elements/wifi-off-element'

export const IconFeatherWifiOff: ElementComponent<IconFeatherWifiOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherWifiOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-wifi-off', IconFeatherWifiOffElement)
