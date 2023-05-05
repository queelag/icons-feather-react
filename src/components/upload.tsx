import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUploadElement } from '@aracna/icons-feather-web/elements/upload-element.js'

export const IconFeatherUpload: ElementComponent<IconFeatherUploadElement, IconProps> = createBaseElementComponent<
  IconFeatherUploadElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-upload', IconFeatherUploadElement)
