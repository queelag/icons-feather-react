import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUploadCloudElement } from '@aracna/icons-feather-web/elements/upload-cloud-element'

export const IconFeatherUploadCloud: ElementComponent<IconFeatherUploadCloudElement, IconProps> = createBaseElementComponent<
  IconFeatherUploadCloudElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-upload-cloud', IconFeatherUploadCloudElement)
