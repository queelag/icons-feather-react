import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFolderElement } from '@aracna/icons-feather-web/elements/folder-element'

export const IconFeatherFolder: ElementComponent<IconFeatherFolderElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFolderElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-folder', IconFeatherFolderElement)
