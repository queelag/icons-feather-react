import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCropElement } from '@aracna/icons-feather-web/elements/crop-element'

export const IconFeatherCrop: ElementComponent<IconFeatherCropElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCropElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-crop', IconFeatherCropElement)
