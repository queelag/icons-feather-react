import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHardDriveElement } from '@aracna/icons-feather-web/elements/hard-drive-element'

export const IconFeatherHardDrive: ElementComponent<IconFeatherHardDriveElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHardDriveElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-hard-drive', IconFeatherHardDriveElement)
