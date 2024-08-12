import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDownloadCloudElement } from '@aracna/icons-feather-web/elements/download-cloud-element'

export const IconFeatherDownloadCloud: ElementComponent<IconFeatherDownloadCloudElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDownloadCloudElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-download-cloud', IconFeatherDownloadCloudElement)
