import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHardDriveElement } from '@aracna/icons-feather-web/elements/hard-drive-element'

export const IconFeatherHardDrive: ElementComponent<IconFeatherHardDriveElement, IconProps> = createBaseElementComponent<
  IconFeatherHardDriveElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-hard-drive', IconFeatherHardDriveElement)
