import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherWifiElement } from '@aracna/icons-feather-web/elements/wifi-element'

export const IconFeatherWifi: ElementComponent<IconFeatherWifiElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherWifiElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-wifi', IconFeatherWifiElement)
