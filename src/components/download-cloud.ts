import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDownloadCloudElement } from '@aracna/icons-feather-web/elements/download-cloud-element'

export const IconFeatherDownloadCloud: ElementComponent<IconFeatherDownloadCloudElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDownloadCloudElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-download-cloud', IconFeatherDownloadCloudElement)
