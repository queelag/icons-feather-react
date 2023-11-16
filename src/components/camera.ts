import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCameraElement } from '@aracna/icons-feather-web/elements/camera-element'

export const IconFeatherCamera: ElementComponent<IconFeatherCameraElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCameraElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-camera', IconFeatherCameraElement)
