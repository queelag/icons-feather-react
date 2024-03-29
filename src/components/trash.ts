import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTrashElement } from '@aracna/icons-feather-web/elements/trash-element'

export const IconFeatherTrash: ElementComponent<IconFeatherTrashElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrashElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-trash', IconFeatherTrashElement)
