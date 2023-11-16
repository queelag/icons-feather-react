import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBluetoothElement } from '@aracna/icons-feather-web/elements/bluetooth-element'

export const IconFeatherBluetooth: ElementComponent<IconFeatherBluetoothElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBluetoothElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bluetooth', IconFeatherBluetoothElement)
