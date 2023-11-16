import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSaveElement } from '@aracna/icons-feather-web/elements/save-element'

export const IconFeatherSave: ElementComponent<IconFeatherSaveElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSaveElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-save', IconFeatherSaveElement)
