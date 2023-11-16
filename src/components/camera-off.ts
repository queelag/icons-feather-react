import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCameraOffElement } from '@aracna/icons-feather-web/elements/camera-off-element'

export const IconFeatherCameraOff: ElementComponent<IconFeatherCameraOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCameraOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-camera-off', IconFeatherCameraOffElement)
