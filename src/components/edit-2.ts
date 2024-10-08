import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherEdit2Element } from '@aracna/icons-feather-web/elements/edit-2-element'

export const IconFeatherEdit2: ElementComponent<IconFeatherEdit2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEdit2Element,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-edit-2', IconFeatherEdit2Element)
