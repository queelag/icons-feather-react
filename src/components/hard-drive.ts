import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherHardDriveElement } from '@aracna/icons-feather-web/elements/hard-drive-element'

export const IconFeatherHardDrive: ElementComponent<IconFeatherHardDriveElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHardDriveElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-hard-drive', IconFeatherHardDriveElement)
