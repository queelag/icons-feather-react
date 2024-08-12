import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBluetoothElement } from '@aracna/icons-feather-web/elements/bluetooth-element'

export const IconFeatherBluetooth: ElementComponent<IconFeatherBluetoothElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBluetoothElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-bluetooth', IconFeatherBluetoothElement)
