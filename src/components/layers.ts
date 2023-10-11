import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLayersElement } from '@aracna/icons-feather-web/elements/layers-element'

export const IconFeatherLayers: ElementComponent<IconFeatherLayersElement, IconProps> = createBaseElementComponent<
  IconFeatherLayersElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-layers', IconFeatherLayersElement)
