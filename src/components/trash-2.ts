import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTrash2Element } from '@aracna/icons-feather-web/elements/trash-2-element'

export const IconFeatherTrash2: ElementComponent<IconFeatherTrash2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrash2Element,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-trash-2', IconFeatherTrash2Element)
