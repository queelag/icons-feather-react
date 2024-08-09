import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUploadElement } from '@aracna/icons-feather-web/elements/upload-element'

export const IconFeatherUpload: ElementComponent<IconFeatherUploadElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUploadElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-upload', IconFeatherUploadElement)
