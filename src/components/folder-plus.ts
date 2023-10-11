import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFolderPlusElement } from '@aracna/icons-feather-web/elements/folder-plus-element'

export const IconFeatherFolderPlus: ElementComponent<IconFeatherFolderPlusElement, IconProps> = createBaseElementComponent<
  IconFeatherFolderPlusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-folder-plus', IconFeatherFolderPlusElement)
