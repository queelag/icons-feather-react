import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCameraElement } from '@aracna/icons-feather-web/elements/camera-element.js'

export const IconFeatherCamera: ElementComponent<IconFeatherCameraElement, IconProps> = createBaseElementComponent<
  IconFeatherCameraElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-camera', IconFeatherCameraElement)
