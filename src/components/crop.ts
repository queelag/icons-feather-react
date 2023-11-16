import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCropElement } from '@aracna/icons-feather-web/elements/crop-element'

export const IconFeatherCrop: ElementComponent<IconFeatherCropElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCropElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-crop', IconFeatherCropElement)
