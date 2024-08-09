import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFolderMinusElement } from '@aracna/icons-feather-web/elements/folder-minus-element'

export const IconFeatherFolderMinus: ElementComponent<IconFeatherFolderMinusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFolderMinusElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-folder-minus', IconFeatherFolderMinusElement)
