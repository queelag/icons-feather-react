import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherEdit2Element } from '@aracna/icons-feather-web/elements/edit-2-element.js'

export const IconFeatherEdit2: ElementComponent<IconFeatherEdit2Element, IconProps> = createBaseElementComponent<
  IconFeatherEdit2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-edit-2', IconFeatherEdit2Element)
