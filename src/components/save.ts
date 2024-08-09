import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSaveElement } from '@aracna/icons-feather-web/elements/save-element'

export const IconFeatherSave: ElementComponent<IconFeatherSaveElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSaveElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-save', IconFeatherSaveElement)
