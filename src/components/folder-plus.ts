import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFolderPlusElement } from '@aracna/icons-feather-web/elements/folder-plus-element'

export const IconFeatherFolderPlus: ElementComponent<IconFeatherFolderPlusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFolderPlusElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-folder-plus', IconFeatherFolderPlusElement)
