import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherWifiOffElement } from '@aracna/icons-feather-web/elements/wifi-off-element'

export const IconFeatherWifiOff: ElementComponent<IconFeatherWifiOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherWifiOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-wifi-off', IconFeatherWifiOffElement)
