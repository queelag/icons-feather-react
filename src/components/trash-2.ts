import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTrash2Element } from '@aracna/icons-feather-web/elements/trash-2-element'

export const IconFeatherTrash2: ElementComponent<IconFeatherTrash2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrash2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-trash-2', IconFeatherTrash2Element)
