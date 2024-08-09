import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCameraOffElement } from '@aracna/icons-feather-web/elements/camera-off-element'

export const IconFeatherCameraOff: ElementComponent<IconFeatherCameraOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCameraOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-camera-off', IconFeatherCameraOffElement)
