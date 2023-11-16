import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDownloadElement } from '@aracna/icons-feather-web/elements/download-element'

export const IconFeatherDownload: ElementComponent<IconFeatherDownloadElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDownloadElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-download', IconFeatherDownloadElement)
