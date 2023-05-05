import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFolderMinusElement } from '@aracna/icons-feather-web/elements/folder-minus-element.js'

export const IconFeatherFolderMinus: ElementComponent<IconFeatherFolderMinusElement, IconProps> = createBaseElementComponent<
  IconFeatherFolderMinusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-folder-minus', IconFeatherFolderMinusElement)
