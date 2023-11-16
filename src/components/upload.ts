import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUploadElement } from '@aracna/icons-feather-web/elements/upload-element'

export const IconFeatherUpload: ElementComponent<IconFeatherUploadElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUploadElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-upload', IconFeatherUploadElement)
