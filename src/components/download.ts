import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDownloadElement } from '@aracna/icons-feather-web/elements/download-element'

export const IconFeatherDownload: ElementComponent<IconFeatherDownloadElement, IconProps> = createBaseElementComponent<
  IconFeatherDownloadElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-download', IconFeatherDownloadElement)
