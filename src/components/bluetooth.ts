import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBluetoothElement } from '@aracna/icons-feather-web/elements/bluetooth-element'

export const IconFeatherBluetooth: ElementComponent<IconFeatherBluetoothElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBluetoothElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-bluetooth', IconFeatherBluetoothElement)
