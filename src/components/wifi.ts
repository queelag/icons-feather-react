import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherWifiElement } from '@aracna/icons-feather-web/elements/wifi-element'

export const IconFeatherWifi: ElementComponent<IconFeatherWifiElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherWifiElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-wifi', IconFeatherWifiElement)
