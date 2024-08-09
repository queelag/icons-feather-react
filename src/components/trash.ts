import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTrashElement } from '@aracna/icons-feather-web/elements/trash-element'

export const IconFeatherTrash: ElementComponent<IconFeatherTrashElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrashElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-trash', IconFeatherTrashElement)
