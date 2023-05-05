import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSaveElement } from '@aracna/icons-feather-web/elements/save-element.js'

export const IconFeatherSave: ElementComponent<IconFeatherSaveElement, IconProps> = createBaseElementComponent<
  IconFeatherSaveElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-save', IconFeatherSaveElement)
