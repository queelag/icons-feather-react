import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUploadCloudElement } from '@aracna/icons-feather-web/elements/upload-cloud-element'

export const IconFeatherUploadCloud: ElementComponent<IconFeatherUploadCloudElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUploadCloudElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-upload-cloud', IconFeatherUploadCloudElement)
