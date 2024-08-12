import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDownloadElement } from '@aracna/icons-feather-web/elements/download-element'

export const IconFeatherDownload: ElementComponent<IconFeatherDownloadElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDownloadElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-download', IconFeatherDownloadElement)
