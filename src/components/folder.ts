import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFolderElement } from '@aracna/icons-feather-web/elements/folder-element'

export const IconFeatherFolder: ElementComponent<IconFeatherFolderElement, IconProps> = createBaseElementComponent<
  IconFeatherFolderElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-folder', IconFeatherFolderElement)
