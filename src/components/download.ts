import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDownloadElement } from '@aracna/icons-feather-web/elements/download-element'

export const IconFeatherDownload: ElementComponent<IconFeatherDownloadElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDownloadElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-download', IconFeatherDownloadElement)
