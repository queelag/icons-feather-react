import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLayersElement } from '@aracna/icons-feather-web/elements/layers-element'

export const IconFeatherLayers: ElementComponent<IconFeatherLayersElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLayersElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-layers', IconFeatherLayersElement)
