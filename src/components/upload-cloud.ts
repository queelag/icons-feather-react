import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUploadCloudElement } from '@aracna/icons-feather-web/elements/upload-cloud-element'

export const IconFeatherUploadCloud: ElementComponent<IconFeatherUploadCloudElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUploadCloudElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-upload-cloud', IconFeatherUploadCloudElement)
