import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSaveElement } from '@aracna/icons-feather-web/elements/save-element'

export const IconFeatherSave: ElementComponent<IconFeatherSaveElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSaveElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-save', IconFeatherSaveElement)
