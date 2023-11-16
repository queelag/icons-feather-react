import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFolderMinusElement } from '@aracna/icons-feather-web/elements/folder-minus-element'

export const IconFeatherFolderMinus: ElementComponent<IconFeatherFolderMinusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFolderMinusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-folder-minus', IconFeatherFolderMinusElement)
