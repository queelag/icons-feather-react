import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFolderElement } from '@aracna/icons-feather-web/elements/folder-element'

export const IconFeatherFolder: ElementComponent<IconFeatherFolderElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFolderElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-folder', IconFeatherFolderElement)
