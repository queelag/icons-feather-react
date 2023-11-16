import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherEdit2Element } from '@aracna/icons-feather-web/elements/edit-2-element'

export const IconFeatherEdit2: ElementComponent<IconFeatherEdit2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEdit2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-edit-2', IconFeatherEdit2Element)
