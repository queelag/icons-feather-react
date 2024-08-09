import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCropElement } from '@aracna/icons-feather-web/elements/crop-element'

export const IconFeatherCrop: ElementComponent<IconFeatherCropElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCropElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-crop', IconFeatherCropElement)
