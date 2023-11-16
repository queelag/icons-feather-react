import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDownloadCloudElement } from '@aracna/icons-feather-web/elements/download-cloud-element'

export const IconFeatherDownloadCloud: ElementComponent<IconFeatherDownloadCloudElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDownloadCloudElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-download-cloud', IconFeatherDownloadCloudElement)
