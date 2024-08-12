import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCameraElement } from '@aracna/icons-feather-web/elements/camera-element'

export const IconFeatherCamera: ElementComponent<IconFeatherCameraElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCameraElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-camera', IconFeatherCameraElement)
