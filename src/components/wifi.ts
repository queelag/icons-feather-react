import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherWifiElement } from '@aracna/icons-feather-web/elements/wifi-element'

export const IconFeatherWifi: ElementComponent<IconFeatherWifiElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherWifiElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-wifi', IconFeatherWifiElement)
