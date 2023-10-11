import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherWifiOffElement } from '@aracna/icons-feather-web/elements/wifi-off-element'

export const IconFeatherWifiOff: ElementComponent<IconFeatherWifiOffElement, IconProps> = createBaseElementComponent<
  IconFeatherWifiOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-wifi-off', IconFeatherWifiOffElement)
