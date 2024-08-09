import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCameraElement } from '@aracna/icons-feather-web/elements/camera-element'

export const IconFeatherCamera: ElementComponent<IconFeatherCameraElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCameraElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-camera', IconFeatherCameraElement)
