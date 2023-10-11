import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCropElement } from '@aracna/icons-feather-web/elements/crop-element'

export const IconFeatherCrop: ElementComponent<IconFeatherCropElement, IconProps> = createBaseElementComponent<
  IconFeatherCropElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-crop', IconFeatherCropElement)
