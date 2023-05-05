import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCameraOffElement } from '@aracna/icons-feather-web/elements/camera-off-element.js'

export const IconFeatherCameraOff: ElementComponent<IconFeatherCameraOffElement, IconProps> = createBaseElementComponent<
  IconFeatherCameraOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-camera-off', IconFeatherCameraOffElement)
