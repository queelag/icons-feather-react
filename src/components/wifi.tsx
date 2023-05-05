import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherWifiElement } from '@aracna/icons-feather-web/elements/wifi-element.js'

export const IconFeatherWifi: ElementComponent<IconFeatherWifiElement, IconProps> = createBaseElementComponent<
  IconFeatherWifiElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-wifi', IconFeatherWifiElement)
