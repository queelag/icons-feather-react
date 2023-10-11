import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDownloadCloudElement } from '@aracna/icons-feather-web/elements/download-cloud-element'

export const IconFeatherDownloadCloud: ElementComponent<IconFeatherDownloadCloudElement, IconProps> = createBaseElementComponent<
  IconFeatherDownloadCloudElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-download-cloud', IconFeatherDownloadCloudElement)
