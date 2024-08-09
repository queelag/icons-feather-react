import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherWifiOffElement } from '@aracna/icons-feather-web/elements/wifi-off-element'

export const IconFeatherWifiOff: ElementComponent<IconFeatherWifiOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherWifiOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-wifi-off', IconFeatherWifiOffElement)
